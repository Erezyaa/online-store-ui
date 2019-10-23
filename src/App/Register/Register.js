import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import User from '../models/user';
import UserService from '../services/user.service';

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitting: false
        };

    }

    send(values) {
        this.setState({ submitting: true });
        UserService
            .register(values)
            .then(() => {
                this.props.history.push('/login/');
            });
    }

    onNameChange(e) {
        this.setState({ name: e.target.value })
    }

    render() {
        return (
            <Formik
                initialValues={{ name: '', email: '', password: '', age: '' }}
                validationSchema={User}
                onSubmit={this.send.bind(this)} >

                <Form className="container">
                    <div className="form-group">
                        <h1>Register</h1>
                        Name: <Field name="name" type="text" className="form-control" />
                        <ErrorMessage name="name" component="div" className="alert alert-danger" />
                    </div>
                    <div className="form-group">
                        Email: <Field name="email" type="text" className="form-control" />
                        <ErrorMessage name="email" component="div" className="alert alert-danger" />
                    </div>
                    <div className="form-group">
                        Password: <Field name="password" type="text" className="form-control" />
                        <ErrorMessage name="password" component="div" className="alert alert-danger" />
                    </div>
                    <div className="form-group">
                        Age: <Field name="age" type="text" className="form-control" />
                        <ErrorMessage name="age" component="div" className="alert alert-danger" />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value={this.state.submitting ? 'Registering...' : 'Register'}
                            className="btn btn-primary"
                            disabled={this.state.submitting} />
                    </div>
                </Form>
            </Formik >
        );
    }
}

export default Register;
