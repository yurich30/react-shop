import React from 'react'
import './cart.css'
import {keys} from 'lodash'

const Cart = ({
    // price,
    // count,
    productsInCart
}) => {
    return(
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId)=> (
                <div>{productId} : {productsInCart[productId]}</div>
                ))
            }
        </div>
    )
}

export default Cart