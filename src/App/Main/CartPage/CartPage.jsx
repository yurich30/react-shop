import React from "react"
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductList from "../../../Components/Cart/CartProductList"
import CartProductListItemExtended from "../../../Components/Cart/CartProductListItemExtended"
import { connect } from "react-redux"



const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity
}) => {
    console.log({productsInCart})
    return(
        <div>
            <h1 className='page-title'>Cart</h1>
            <CartProductList
                removeProductFromCart = {removeProductFromCart}
                productsInCart = {productsInCart} 
                CartItem={CartProductListItemExtended}
                changeProductQuantity = {changeProductQuantity}
            />
            <CartTotal
                productsInCart = {productsInCart}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart
})

export default connect(
    mapStateToProps
)(CartPage)