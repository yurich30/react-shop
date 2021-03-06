import React from 'react'
import {keys} from 'lodash'
import productsData, {getProductsMap} from '../../App/Main/Products/productsData'
import CartProductListItem from './CartProductListItem'

const CartProductsList = ({
    productsInCart,
    productsObject = getProductsMap(productsData),
    CartItem=CartProductListItem,
    removeProductFromCart,
    changeProductQuantity
}) => {
    return (
        <div>
            {
                keys(productsInCart).map((productId) => (
                    <CartItem 
                    productCount={productsInCart[productId]}
                    product={productsObject[productId]}
                    key={productId}
                    removeProductFromCart = {removeProductFromCart}
                    changeProductQuantity ={changeProductQuantity}

                    />
                ))
            }
        </div>
    )
}

export default CartProductsList