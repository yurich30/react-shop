import React, { Component } from "react"
import { keys } from "lodash"
 
class Cart extends Component {
    state = {
        cartProductCount: 0,
        cartTotalPrice: 0,
    }

    render()  {
        const {
            productsInCart
        } = this.props

        return (
            <div className="cart text-center">
                {
                    keys(productsInCart).map((productId) => (
                        <div>{productId}: {productsInCart[productId]}</div>
                    ))
                }
            </div>
        )
    }
    

}

export default Cart