import React from 'react'
import {keys} from 'lodash'
import productsData, {getProductsMap} from '../../App/Main/Products/productsData'

const CartTotal = ({
    productsInCart,
    productsObject = getProductsMap(productsData)
}) => {
    return (
        <div>
            Total: {
                keys(productsInCart).reduce((total,productId)=>(
                    total + (productsObject[productId].price * productsInCart[productId])
                ),0)
            }$
        </div>
    )
}

export default CartTotal