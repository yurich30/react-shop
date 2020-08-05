import React from 'react'
import './product-list-item.css'

const ProductsListItem = ({
    name,
    description,
    type,
    capacity,
    price
}) => {
    return(
        <div className="product-list-item">
            <h2 className="product-title">{name}</h2>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}GB</div>
            <div classname="product-price">$ {price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductsListItem