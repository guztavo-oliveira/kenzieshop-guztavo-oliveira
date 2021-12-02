import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("@shop:cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;

      return [...state, product];

    case REMOVE_PRODUCT: {
      const { product } = action;
      return [...state.filter((e) => e.id !== product)];
    }
    default:
      return state;
  }
};

export default cartReducer;
