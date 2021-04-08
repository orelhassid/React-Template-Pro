import firebase from "../firebase/firebase";
import { mapUserObject } from "../utils/mapBackend";

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

const update = async (userInfo) => {
  const currentUser = firebase.auth().currentUser;

  await currentUser.updateProfile({
    displayName: userInfo.name,
    photoURL: userInfo.profileImage,
  });
};

const deleteUser = async () => {
  const currentUser = firebase.auth().currentUser;
  await currentUser.delete();
};

const logout = async () => {
  await firebase.auth().signOut();
};

const authGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const userCredential = await firebase.auth().signInWithPopup(provider);
  return returnData(userCredential);
};

const authEmail = async ({ email, actionCodeSettings }) => {
  await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
};

const returnData = (userCredential) => {
  const user = userCredential.user;

  return {
    data: mapUserObject(user),
    isNewUser: userCredential.additionalUserInfo.isNewUser,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  update,
  deleteUser,
  authGoogle,
  authEmail,
};
