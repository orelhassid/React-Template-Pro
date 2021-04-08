import { userTypes } from "../types";

const initialState = {
  data: {},
  status: "idle",
  userStatus: "logout",
  error: null,
};

const user = (user = initialState, action) => {
  console.log("Auth Reducer", { user, action });

  switch (action.type) {
    case userTypes.create:
    case userTypes.update:
      return {
        data: { ...user.data, ...action.payload },
        status: "ready",
        userStatus: "login",
      };
    case userTypes.delete:
      return {
        data: {},
        userStatus: "logout",
        status: "ready",
      };

    default:
      return user;
  }
};

export default user;
