import React from 'react'
import ProductListItem from './ProductListItem'
import ProductsData from './ProductsData'

const ProductsList = () => {
    return(
        <div>
            <h1 className="page-title">Products List</h1>
            <div className="row">
                {
                    ProductsData.map((product)=>
                        <div className="col-lg-6">
                            <ProductListItem
                                name={product.name}
                                description={product.description}
                                type={product.type}
                                capacity={product.capacity}
                                price={product.price}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProductsList