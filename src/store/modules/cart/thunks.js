import { addProduct } from "./actions";
import { remProduct } from "./actions";

export const addProductThunk = (product) => (dispatch, getState) => {
  const list = JSON.parse(localStorage.getItem("@shop:cart")) || [];

  const newList = [...list, product];

  localStorage.setItem("@shop:cart", JSON.stringify(newList));

  dispatch(addProduct(product));
};

export const remProductThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@shop:cart")) || [];

  const newList = list.filter((e) => e.id !== product);

  localStorage.setItem("@shop:cart", JSON.stringify(newList));

  dispatch(remProduct(product));
};
