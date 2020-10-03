import { combineReducers } from "redux";
import { productList, productDetails } from "./product";

const reducer = combineReducers({
  productList,
  productDetails,
});

export default reducer;
