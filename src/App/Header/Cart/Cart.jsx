import React, { Component } from "react"
import { keys } from "lodash"
import { Link } from "react-router-dom"
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
                        <div key={productId}>{productsObject[productId].name}: {productsInCart[productId]}</div>
                    ))
                }
                <div>
                    Total: {
                        keys(productsInCart).reduce((total,productId)=>(
                            total + (productsObject[productId].price * productsInCart[productId])
                        ),0)
                    }$
                </div>
                <Link to="/cart">Show Cart</Link>
            </div>
            
        )
    }
    

}

export default Cart