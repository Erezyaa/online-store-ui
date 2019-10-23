import React, { Component } from 'react'
import productService from '../../services/product.service';
import './Product.scss';
import cartService from '../../services/cart.service';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions';

export class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        productService.getById(this.props.match.params.id)
            .then(res => res.json())
            .then(product => this.setState({ product }));
    }

    addToCart() {
        this.props.addToCart(this.state.product.id);
    }

    render() {
        return (
            <div>
                <h1>Product page</h1>
                {this.state.product.title}
                {this.state.product.price}
                <br />
                <br />
                <button className="btn-ass-to-cart"
                    onClick={this.addToCart.bind(this)}>Add to cart</button>
            </div>
        )
    }
}

export default connect(null, {
    addToCart
})(Product);
