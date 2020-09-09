const products = [
    {
        id:1,
        name:"iPhone X",
        description:"This is iPhone X",
        capacity:64,
        color:"green",
        price:500,
        type:"phone",
        image:"images/products/iPad.png",
    },
    {
        id:2,
        name:"iPhone XS",
        description:"iPhone XS",
        capacity:256,
        price:1000,
        type:"phone",
        image:"/images/products/iPhone.png",
    },
    {
        id:3,
        name:"iPhone 8 Plus",
        description:"This is iPhone 8 Plus",
        capacity:256,
        price:800,
        type:"phone",
        image:"/images/products/Apple TV.png",
    },
    {
        id:4,
        name:"iPhone 8",
        description:"This is iPhone 8",
        capacity:64,
        price:300,
        type:"phone",
        image:"/images/products/Apple TV.png",
    }
]

export const getProductsMap = (array) => {
    return array.reduce((accObj,product) => ({
        ...accObj,
        [product.id]:product
    }),{})
}

export default products