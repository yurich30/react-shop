import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { productLikeReducer } from "./ProductLikeReducer";  

const rootReducer = combineReducers({
    productsLikeState: productLikeReducer,
    productsInCart: cartReducer
})

export default rootReducer