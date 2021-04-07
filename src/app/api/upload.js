import firebase from "../firebase/firebase";

const prefix = "images";
export const uploadFile = async (file) => {
  // Create a reference to the file
  const storageRef = firebase.storage().ref();

  const fileRef = storageRef.child(`${prefix}/${file.name}`);

  try {
    const snapshot = await fileRef.put(file);
    console.log("Uploaded a blob or file!");
  } catch (error) {
    console.error(error);
  }
};

export default { uploadFile };
