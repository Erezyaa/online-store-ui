import React, { Component } from 'react'
import './Cart.scss';
import CartService from '../services/cart.service';
import ProductService from '../services/product.service';
import cartService from '../services/cart.service';


export class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        this.loadCart();
    }


    loadCart() {
        const cartProducts = CartService.getAll();
        const ids = cartProducts.map(product => product.id);
        ProductService.getByIds(ids)
            .then(res => res.json())
            .then(products => {
                products = this.addQuantities(products, cartProducts);
                this.setState({ products });
            })
            .catch(error => console.log(error));
    }

    /*Merge between 2 ids to add qty*/
    addQuantities(products, cartProducts) {
        let cartObj = {};
        cartProducts.forEach(product => cartObj[product.id] = product.qty);
        products.forEach(product => product.qty = cartObj[product.id]);
        return products;
    }

    carcTotal(products) {
        let total = 0;
        products.forEach(product => {
            total += product.qty * product.price;
        });
        return total;
    }

    remove(productId) {
        CartService.remove(productId);
        this.loadCart();
    }


    render() {
        return (
            <div>
                <h1>Cart</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Price</th>
                            <th>Quntity</th>
                            <th>Sub-total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, index) => {
                            return <tr key={index}>
                                <td><strong>{product.title}</strong></td>
                                <td>${product.price.toFixed(2)}</td>
                                <td><sub>X</sub>{product.qty}</td>
                                <td>${(product.qty * product.price).toFixed(2)}</td>
                                <td><button onClick={this.remove.bind(this, product.id)} className="btn btn-danger">X</button></td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4"></td>
                            <td><strong>Total:</strong> ${this.carcTotal(this.state.products).toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default Cart
