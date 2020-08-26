import React, { Component } from "react"
import { keys } from "lodash"
import productsData from '../../Main/Products/productsData'

const productsObject = productsData.reduce((accObj,product) => ({
    ...accObj,
    [product.id]:product
}),{})

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
                        <div>{productsObject[productId].name}: {productsInCart[productId]}</div>
                    ))
                }
                <div>
                    total
                </div>
            </div>
            
        )
    }
    

}

export default Cart