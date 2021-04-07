import authApi from "../../api/auth";
import { userTypes } from "../types";
import storage from "../../services/storage";
import { storageKeys } from "../../config";

export const register = ({ email, password }) => async (dispatch) => {
  try {
    const { data } = await authApi.register({ email, password });
    storage.set(storageKeys.user, data);
    return dispatch({ type: userTypes.create, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  try {
    const { data } = await authApi.login({ email, password });
    storage.set(storageKeys.user, data);
    return dispatch({ type: userTypes.update, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const update = (userInfo) => async (dispatch) => {
  try {
    return dispatch({ type: userTypes.update, payload: userInfo });
  } catch (error) {
    console.error(error);
  }
};

export default {
  register,
  login,
  update,
};
