import React, { Component } from 'react';
import productService from '../../services/product.service';
import './Products.scss'
import { Link } from 'react-router-dom';

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        productService.getAll()
            .then(res => res.json())
            .then(products => this.setState({ products }))
    }

    remove(productId){
        productService.remove(productId);

    }

    render() {

        return <div>
            <h2>Products</h2>
            <div className="d-flex justify-content-end mb-3" >
                <Link to="/admin/products/create" className="btn btn-primary">Create product</Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map(product => {
                        return <tr key={product.id}>
                            <td>{product.id.substring(product.id.length - 6)}</td>
                            <td>
                                <img className="product-image"
                                    src={'http://localhost:4000/products/' + product.image} />
                                {product.title} 
                            </td>
                            <td>${product.price.toFixed(2)}</td>
                           <td><button onClick={this.remove.bind(this, product.id)} className="btn btn-danger"> Remove </button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}

export default Products;
