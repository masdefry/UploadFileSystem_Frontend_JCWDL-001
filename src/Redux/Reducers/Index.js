import { combineReducers } from "redux";

import productReducer from "./ProductReducer";

const allReducer = combineReducers({
    products: productReducer
})

export default allReducer