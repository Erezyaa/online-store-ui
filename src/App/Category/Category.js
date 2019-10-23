import React, { Component } from 'react';
import ProductService from '../services/product.service'
import './Category.scss';
import { Link } from 'react-router-dom';

export class Category extends Component {

    constructor(props) {
        super(props);
        this.categoryId = this.props.match.params.id;
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        ProductService.getByCategoryId(this.categoryId)
            .then(res => res.json())
            .then(products => this.setState({ products }));
    }

    render() {
        return (
            <div className="category">
                {this.state.products.map((product, index) => {
                    return <div className="product" >
                        <img alt="" src={'http://localhost:4000/products' + product.image} />
                        <Link to={`/category/${this.categoryId}/product/${product.id}`} className="product" key={index}>{product.title}</Link>;
                </div>
                })}
            </div>
        );
    }
}

export default Category;
