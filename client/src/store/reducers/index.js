import { combineReducers } from "redux";
import { productList, productDetails } from "./product";
import { cart } from "./cart";
import { userLogin, userRegister } from "./user";

const reducer = combineReducers({
  productList,
  productDetails,
  cart,
  userLogin,
  userRegister,
});

export default reducer;
