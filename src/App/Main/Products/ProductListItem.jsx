import React from 'react'
import PropTypes from 'prop-types';
import './product-list-item.css'

const ProductsListItem = ({
    name,
    description = "No description...>",
    type,
    capacity,
    price,
    image,
}) => {
    return(
        <div className="product-list-item">
            <div className="product-image">
                <img src={image} alt=""/>
            </div>
            <h2 className="product-title">{name}</h2>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}GB</div>
            <div className="product-price">$ {price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

ProductsListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

// ProductsListItem.defaultProps = {
//     description:"No description...",
// }

export default ProductsListItem