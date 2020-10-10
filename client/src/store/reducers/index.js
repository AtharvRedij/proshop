import { combineReducers } from "redux";
import { productList, productDetails } from "./product";
import { cart } from "./cart";
import { userLogin } from "./user";

const reducer = combineReducers({
  productList,
  productDetails,
  cart,
  userLogin,
});

export default reducer;
