import { combineReducers } from "redux";
import { productList, productDetails } from "./product";
import { cart } from "./cart";
import {
  userLogin,
  userRegister,
  userDetails,
  userUpdateProfile,
} from "./user";

const reducer = combineReducers({
  productList,
  productDetails,
  cart,
  userLogin,
  userRegister,
  userDetails,
  userUpdateProfile,
});

export default reducer;
