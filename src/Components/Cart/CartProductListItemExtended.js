import React from 'react'
import Quantity from '../Quantity/Quantity'
import './CartProductListItemExtended.css'
import { connect } from "react-redux";


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
    isLiked,
    removeLike,
    addLike
}) => (     
    <div className="cart-product-list-item-description">
        <div className="row">
            <div className="col-lg-3">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="col-lg-9">
                <p className="cart-extended-name">
                    <span> {product.name} </span> 
                </p>
                <p className="cart-extended-price">
                        Price for one item: <span className="bold">$ {product.price} </span> 
                </p>
                <p className="cart-extended-count">
                <Quantity 
                    productCount = {productCount}
                    changeProductQuantity = {changeProductQuantity}
                    onDecrementClick={() => (productCount ===1 ? removeProductFromCart(product.id) : changeProductQuantity(product.id,productCount-1))}
                    onIncrementClick={() => changeProductQuantity(product.id,productCount+1)}
                    minCount={0}
                />
                </p>
                <p className="cart-extended-sum">
                        Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                </p>
                <button onClick={() => isLiked ? removeLike(product.id) : addLike(product. id)}>{isLiked ? <span>&#9829;</span> : <span>&#9825;</span>} </button>
                <button onClick = {() => removeProductFromCart(product.id)}>delete</button>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state, props) => ({
    isLiked:state.productsLikeState[props.product.id]
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) => dispatch ({
        type: "LIKE",
        id
    }),
    removeLike: (id) => dispatch ({
        type: "DISLIKE",
        id
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartProductListItemExtended)

// export default CartProductListItemExtended

