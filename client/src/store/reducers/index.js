import { combineReducers } from "redux";
import { productList, productDetails } from "./product";
import { cart } from "./cart";

const reducer = combineReducers({
  productList,
  productDetails,
  cart,
});

export default reducer;
