import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { storageKeys } from "../config";
import authActions from "../redux/actions/auth";
import storage from "../services/storage";
import useAlert from "./useAlert";

// import jwtDecode from "jwt-decode";

// import AuthContext from "../contexts/auth";
// import authStorage from "../services/auth";

const useAuth = () => {
  const user = useSelector((store) => store.user);
  const { setAlert } = useAlert();

  const dispatch = useDispatch();

  const [status, setStatus] = useState({});

  // const isReady = user.status === "ready";

  const register = async ({ email, password }) => {
    await dispatch(authActions.register({ email, password }));
  };

  const login = async ({ email, password }) => {
    await dispatch(authActions.login({ email, password }));
  };

  const restore = async () => {
    const user = storage.get(storageKeys.user);
    await dispatch(authActions.update(user));
  };

  return { user: user.data, status, register, login, restore, dispatch };
};
export default useAuth;
