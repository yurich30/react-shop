import React, { Component } from "react"
import PropTypes from 'prop-types';
import "./product-list-item.css"
import Quantity from "../../../Components/Quantity/Quantity";


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

    renderLike(){
        const {
            isLiked,
            id ,
            addLike,
            removeLike
        } = this.props
        if(isLiked){
            removeLike(id)
        } else {
            addLike(id)
        }
    }

    render() {
        const {
            id,
            name,
            description = "No description",
            type,
            capacity,
            price,
            image = '/images/products/iPhone.png',
            addProductToCart,
            isLiked = false
        } = this.props;
        const { 
            productCount,
        } = this.state;
        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt=""/>
                </div> 
                <button onClick = {() => this.renderLike()}>
                    {isLiked ? <span>&#129505;</span> : <span>&#128420;</span>}
                </button>
                <div className="product-title">{name}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <Quantity 
                    productCount = {this.state.productCount}
                    onDecrementClick = {this.onDecrementClick}
                    onIncrementClick = {this.onIncrementClick}
                    minCount={1} 
                />
                <div className="product-price">${price}</div>
                <button className="btn-add-to-cart" 
                onClick={() => {addProductToCart(id, this.state.productCount);}}
                >Add to cart</button>
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
