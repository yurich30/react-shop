import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './product-list-item.css'

class ProductListItem extends Component {
    constructor() {
        super();
        this.state = {
            productCount:1,
        }
    }
    render() {
        const {
            name,
            description = "No description...>",
            type,
            capacity,
            price,
            image = "/images/products/iPhone.png",
        } = this.props;



        return(
            <div className="product-list-item">
                <div className="product-image">
                    <img src={this.props.image} alt=""/>
                </div>
                <h2 className="product-title">{this.props.name}</h2>
                <div className="product-description">{this.props.description}</div>
                <div className="product-features">Type: {this.props.type}</div>
                <div className="product-features">Capacity: {this.props.capacity}GB</div>
                <div className="product-price">$ {this.props.price}</div>
                <div className="product-quantity">
                    <button>-</button>
                    <input type="text" value="1" readOnly/>
                    <button>+</button>
                </div>
                <button className="btn-add-to-cart">Add to cart</button>
            </div>
        ) 
    }
}

// const ProductListItem = ({
//     name,
//     description = "No description...>",
//     type,
//     capacity,
//     price,
//     image = "/images/products/iPhone.png",
// }) => {
//     return(
//         <div className="product-list-item">
//             <div className="product-image">
//                 <img src={image} alt=""/>
//             </div>
//             <h2 className="product-title">{name}</h2>
//             <div className="product-description">{description}</div>
//             <div className="product-features">Type: {type}</div>
//             <div className="product-features">Capacity: {capacity}GB</div>
//             <div className="product-price">$ {price}</div>
//             <div className="product-quantity">
//                 <button>-</button>
//                 <input type="text" value="1"/>
//                 <button>+</button>
//             </div>
//             <button className="btn-add-to-cart">Add to cart</button>
//         </div>
//     )
// }

ProductListItem.propTypes = {
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

export default ProductListItem