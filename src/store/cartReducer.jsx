import { omit } from "lodash"

const cartReducer = (state = {
    1:3,
    2:3
}, action) => {
    switch(action.type){
        case "ADD_PRODUCT_TO_CART" :
            return{
                ...state,
                [action.id]: (state[action.id] || 0) + action.count 
            }
        case "REMOVE_PRODUCT_FROM_CART" :
            return   omit(state,[action.id])
              
        case "CHANGE_PRODUCT_QUANTITY" :
            return {
                ...state,
                [action.id]:action.quantity
            }
        default :
            return state
    }
}

export default cartReducer