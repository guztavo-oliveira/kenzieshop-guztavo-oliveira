import { ADD_PRODUCT } from "./actionTypes";
import { REMOVE_PRODUCT } from "./actionTypes";
export const addProduct = (product) => ({ type: ADD_PRODUCT, product });
export const remProduct = (product) => ({ type: REMOVE_PRODUCT, product });
