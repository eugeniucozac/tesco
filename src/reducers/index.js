import { combineReducers } from "redux"
import { cartReducer } from "reducers/cart"
import { productReducer } from "reducers/product"

const rootReducer = combineReducers({ cart: cartReducer, products: productReducer })

export default rootReducer
