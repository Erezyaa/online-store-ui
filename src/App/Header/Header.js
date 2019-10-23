import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import CartButton from './CartButton/CartButton';
import cookie from 'react-cookies';

class Header extends React.Component {

    constructor(props) {
        super(props);

    }

    logout() {
        cookie.remove('user');
    }

    render() {
        return (
            <header className="Header d-flex">
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/cart" className="cart">Cart</Link></li>

                </ul>
                <CartButton />
                <button onClick={this.logout.bind(this)}>Logout</button>
            </header>
        );
    }
}

export default Header;


