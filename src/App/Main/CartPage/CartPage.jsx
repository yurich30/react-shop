import React from "react"
import productsData from '../../Main/Products/productsData'
import {keys} from 'lodash'


const productsObject = productsData.reduce((acc, product) => ({
    ...acc,
    [product.id]:product
}),{})

console.log(productsObject)

const CartPage = (
    {productsInCart}
) => {
    console.log({productsInCart})
    return(
        <div>
            <h1 className='page-title'>Cart</h1>
            {
                    keys(productsInCart).map((productId) => (
                    <div key={productId}>{productsObject[productId].name}: Amount:{productsInCart[productId]} Price:{productsObject[productId].price*productsInCart[productId]}</div>
                    ))
                }
                <div>
                    Total: {
                        keys(productsInCart).reduce((total,productId)=>(
                            total + (productsObject[productId].price * productsInCart[productId])
                        ),0)
                    }$
                </div>
        </div>
    )
}

export default CartPage;