import React from "react"

import ProductListItem from "./ProductListItem"
import productsData from "./productsData"

const ProductsList = ({
    addProductToCart,
    likeProductState,
    addLike,
    removeLike
}) => {
    return (
        <div>
            <h1 className="page-title">Products list</h1>
            <div className="row">
                {productsData.map(({
                    id,
                    name,
                    description,
                    type,
                    capacity,
                    color,
                    price,
                    image,
                }) => (
                        <div className="col-lg-6" key={id}>
                            <ProductListItem
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                color={color}
                                price={price}
                                image={image}
                                addProductToCart = {addProductToCart}
                                likeProductState = {likeProductState}
                                id={id}
                                addLike = {addLike}
                                removeLike = {removeLike}
                                isLiked = {likeProductState[id]}
                            />
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ProductsList