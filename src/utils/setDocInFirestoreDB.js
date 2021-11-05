import { setDoc } from "firebase/firestore";

const setDocInFirestoreDB = async (docRef, data) => {
  try {
    await setDoc(docRef, data);
  } catch (error) {
    console.error("Error adding document: ", error);
  };
};

export default setDocInFirestoreDB;