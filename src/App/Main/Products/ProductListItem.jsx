import React from 'react'
import './product-list-item.css'

const ProductsListItem = (props) => {
    return(
        <div className="product-list-item">
            <h2 className="product-title">{props.name}</h2>
            <div className="product-description">{props.description}</div>
            <div className="product-features">Type: {props.type}</div>
            <div className="product-features">Capacity: {props.capacity}GB</div>
            <div classname="product-price">$ {props.price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductsListItem