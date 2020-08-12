import React, { Component } from "react"

import PropTypes from 'prop-types';

import "./product-list-item.css"


class ProductListItem extends Component {

    state = {
        productCount:1,
    }
  
    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount - 1
        }))
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount + 1
        }))
    }

    render() {
        const {
            name,
            description = "No description",
            type,
            capacity,
            price,
            image = '/images/products/iphone.png',
        } = this.props;
        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt=""/>
                </div> 
                <div className="product-title">{name}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-quantity">
                    <button onClick={this.onDecrementClick} disabled={this.state.productCount === 1}>-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button onClick={this.onIncrementClick} disabled={this.state.productCount === 10}>+</button>
                </div>
                <div className="product-price">${price}</div>
                <button className="btn-add-to-cart">Add to cart</button>
            </div>
        )
    }
}

// const ProductListItem = ({

// }) => {}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

// ProductListItem.defaultProps = {
//     description: "No description ..."
// }

export default ProductListItem
