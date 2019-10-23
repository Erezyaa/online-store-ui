import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import UserService from '../services/user.service';
import cookie from 'react-cookies';


export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitting: false
        };

    }

    send(values) {
        this.setState({ submitting: true });
        UserService
            .login(values.email, values.password)
            .then(response => response.json())
            .then(response => {
                const twoWeeksTime = 60 * 60 * 24 * 14;
                cookie.save('user', response.token, { path: '/', maxAge: twoWeeksTime });
                this.props.history.push('/');
                console.log(response);

            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={this.send.bind(this)} >
                    <Form >
                        <div className="form-group">
                            Email: <Field name="email" type="text" className="form-control" />
                            <ErrorMessage name="email" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            Password: <Field name="password" type="text" className="form-control" />
                            <ErrorMessage name="password" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <input type="submit"
                                value={this.state.submitting ? 'Logging...' : 'Login'}
                                className="btn btn-primary"
                                disabled={this.state.submitting}

                            />
                        </div>
                    </Form>
                </Formik >
            </div>
        )
    }
}

export default Login;
