import React, { Component } from 'react';
import './CreateProduct.scss';
import { ErrorMessage, Field, Form, Formik } from "formik";
import Product from '../../../models/product';
import CategoryService from '../../../services/category.service';
import productService from '../../../services/product.service';



export class CreateProduct extends Component {

    constructor(props) {
        super(props);
        this.image = React.createRef();
        this.state = {
            submitting: false,
            categories: []
        }
    }
    componentDidMount() {
        CategoryService
            .getAll()
            .then(res => res.json())
            .then(categories => {
                this.setState({ categories });
            });
    }

    send(values) {
        console.log(values)
        this.setState({ submitting: true });
        productService.create(values)
            .then(() => {
                this.setState({ submitting: false });
                this.props.history.push('/admin/products');
            });
    }


    render() {
        return (
            <div>
                <h1>products</h1>
                <div className="register_container">
                    <Formik
                        initialValues={{ title: '', description: '', price: '', categoryId: '' }}
                        validationSchema={Product}
                        onSubmit={this.send.bind(this)}
                        render={({ setFieldValue }) => {
                            return <Form>
                                <div className="form-group">
                                    <label className="label">Title:</label>
                                    <Field name="title" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <Field name="description" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <Field name="price" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Category:</label>
                                    <Field name="categoryId" component="select" placeholder="Choose category">
                                        <option disabled value="">Choose category</option>
                                        {this.state.categories.map((category, i) => {
                                            return <option value={category.id}
                                                key={i} >
                                                {category.name}</option>
                                        })}
                                    </Field>
                                </div>
                                <div className="form-group">
                                    <label>Uplaod Image:</label>
                                    <input name="image" type="file" onChange={(event) => {
                                        setFieldValue('image', event.currentTarget.files[0]);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <input type="submit"
                                        value="Submit"
                                        className="btn btn-primary"
                                        disabled={this.state.submitting}
                                    />
                                </div>
                            </Form>
                        }}
                    >



                    </Formik>
                </div>
            </div>
        )
    }
}

export default CreateProduct;
