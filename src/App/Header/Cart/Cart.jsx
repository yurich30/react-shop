import React, { Component } from "react"
import { Link } from "react-router-dom"
import productsData, {getProductsMap} from '../../Main/Products/productsData'
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductList from "../../../Components/Cart/CartProductList"



class Cart extends Component {
    state = {
        cartProductCount: 0,
        cartTotalPrice: 0,
    }

    render()  {
        const {
            productsInCart,
            productsObject = getProductsMap(productsData)
        } = this.props

        return (
            <div className="cart text-center">
                <CartProductList
                   productsInCart = {productsInCart} 
                />
                <CartTotal
                    productsInCart = {productsInCart}
                />
                <Link to="/cart">Show Cart</Link>
            </div>
            
        )
    }
    

}

export default Cart