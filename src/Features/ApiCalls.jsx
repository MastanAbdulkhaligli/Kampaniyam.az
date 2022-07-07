import { loginFailure, loginStart, loginSuccess } from "./Auth/UserSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("http://localhost:3003/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
