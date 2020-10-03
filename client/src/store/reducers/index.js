import { combineReducers } from "redux";
import { productList } from "./product";

const reducer = combineReducers({
  productList,
});

export default reducer;
