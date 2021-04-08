import { useState } from "react";
import firebase from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { storageKeys } from "../config";
import authActions from "../redux/actions/auth";
import storage from "../services/storage";
import useAlert from "./useAlert";
import { userTypes } from "../redux/types";
import authApi from "../api/auth";
import { mapUserObject } from "../utils/mapBackend";
import { useHistory } from "react-router";
import { HOME_RT } from "../config/routes";

const useAuth = () => {
  const user = useSelector((store) => store.user);
  const { setAlert } = useAlert();
  const history = useHistory();

  const dispatch = useDispatch();

  // const isReady = user.status === "ready";

  const register = async ({ email, password }) => {
    await dispatch(authActions.register({ email, password }));
    setAlert({
      message: "Register successfuly",
    });
  };

  const login = async ({ email, password }) => {
    await dispatch(authActions.login({ email, password }));
    setAlert({
      message: "Authenticate successfuly",
    });
  };

  const update = async (userInfo) => {
    try {
      await authApi.update(userInfo);

      await dispatch({ type: userTypes.update, payload: userInfo });
      setAlert({
        message: "Update User successfuly",
      });
    } catch (error) {
      setAlert({
        message: "Update Error",
      });
      console.error(error);
    }
  };

  const logout = async () => {
    console.log("logout useAuth");
    storage.remove(storageKeys.user);

    dispatch({ type: userTypes.delete });
    setAlert({
      message: "Logout successfuly",
    });
    history.push(HOME_RT);
  };

  const restore = async () => {
    // let user = firebase.auth().currentUser;

    let user = storage.get(storageKeys.user);
    user = mapUserObject(user);
    console.log("Restore", user);

    dispatch({ type: userTypes.update, payload: user });

    setAlert({
      message: "Restore User",
      type: "info",
    });
  };

  const authGoogle = async () => {
    const result = await authApi.authGoogle();

    await dispatch({ type: userTypes.create, payload: result.data });
    return result;
  };

  return {
    user: user.data,
    status: {
      isLogin: user.userStatus === "login",
    },
    register,
    login,
    restore,
    logout,
    update,
    authGoogle,
    dispatch,
  };
};
export default useAuth;
