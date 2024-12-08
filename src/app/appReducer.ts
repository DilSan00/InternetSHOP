import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "@/entities/category/model/categorySlice";
import productReducer from "@/entities/products/model/productSlice";

export const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
});
