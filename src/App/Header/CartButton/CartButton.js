import React, { Component } from 'react';
import './CartButton.scss';
import CartService from '../../services/cart.service';
import { connect } from 'react-redux';

export class CartButton extends React.Component {

    // productCount() {
    //     return CartService.getAll().length;
    // }

    render() {
        return (
            <div className="CartButton badge badge-light">
                Cart: {this.props.itemCount}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemCount: state.cartItemsCount
    };
}

export default connect(mapStateToProps)(CartButton);
