import { signIn } from "./actions";
import api from "../../../services/API/api";

export const signInThunk = (userData) => (dispatch, getState) => {
  api
    .post("/sessions/", userData)
    .then((response) => {
      localStorage.setItem("@shop:token", response.data.access);

      dispatch(signIn(response.data.access));
    })
    .catch((err) => console.log(err));
};
