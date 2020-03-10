import React, { Component } from 'react';
import ProductService from '../services/product.service'
import './Category.scss';
import { Link } from 'react-router-dom';
import productService from '../services/product.service';

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
            .then(products => {
                console.log(products)
                this.setState({ products })
            }
            )

    }

    render() {
        return (
            <div className="category">
                {this.state.products.map((product, index) => {
                    return <div className="product" >
                        <Link to={`/category/${this.categoryId}/product/${product.id}`} key={index}>
                            <img className="img" alt="" src={'http://localhost:4000/products/' + product.image} />
                        </Link>
                    </div>
                })}
            </div>
        );
    }
}

export default Category;
