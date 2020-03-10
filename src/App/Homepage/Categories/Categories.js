import React, { Component } from 'react';
import CategoryService from '../../services/category.service';
import ProductService from '../../services/product.service'
import { Link } from "react-router-dom";
import './Categories.scss';
import { Product } from '../../Category/Product/Product';


export class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        return (
            <div className="categories">
                {this.state.categories.map((category, i) => {
                    return <Link to={'/category/' + category.id}
                        className="category-home"
                        key={i}>{category.name}</Link>
                })}
            </div>
        );
    }
}

export default Categories;