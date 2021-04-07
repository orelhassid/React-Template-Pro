import firebase from "../firebase/firebase";

const register = async ({ email, password }) => {
  const userCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  return returnData(userCredential);
};

const login = async ({ email, password }) => {
  const userCredential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  return returnData(userCredential);
};

const returnData = (userCredential) => {
  const user = userCredential.user;

  return {
    data: {
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      uid: user.uid,
    },
    isNewUser: userCredential.additionalUserInfo.isNewUser,
  };
};

const logout = async () => {
  await firebase.auth().signOut();
};
export default {
  register,
  login,
  logout,
};
