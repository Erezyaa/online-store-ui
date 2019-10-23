import React, { Component } from 'react';
import Categories from '../Homepage/Categories/Categories';

export class Homepage extends Component {



    render() {
        return (
            <div className="container">
                <h1>Homepage</h1>
                <Categories />

            </div>
        );
    }
}

export default Homepage;
