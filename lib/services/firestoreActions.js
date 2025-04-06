import { collection, getDocs, query,doc, setDoc, addDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const setDocument = async (collectionName, documentId, data) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docResult = await setDoc(docRef, data, { merge: true });
    console.log("Document written with ID: ", documentId);
    return {
      success: true,
      message: "Document written successfully!",
      data: docResult,
    };
  } catch (e) {
    console.error("Error adding document: ", e);
    return {
      success: false,
      message: e,
      data:null
    };
  }
};

export const AddDocument = async (collectionName, data) => {
  try {
    const collRef = collection(db, collectionName);
    const docResult = await addDoc(collRef, data);
    console.log("Document Add with ID: ", docResult.id);
    return {
      success: true,
      message: "Document Add successfully!",
      data: docResult,
    };
  } catch (e) {
    console.error("Error adding document: ", e);
    return {
      success: false,
      message: e,
      data:null
    };
  }
};




export const getCollection = async (collectionName, filter) => {
  try {
    let q = collection(db, collectionName);
    if (filter) {
      q = query(q, filter);
    }
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return {
      success: true,
      message: "Collection fetched successfully!",
      data: data,
    };
  } catch (e) {
    console.error("Error getting collection: ", e);
    return {
      success: false,
      message: e,
      data: null,
    };
  }
};
export const getDocument = async (documnetPath, filter) => {
  try {
    let q = doc(db, documnetPath,);
    if (filter) {
      q = query(q, filter);
    }
    const querySnapshot = await getDoc(q);
    const data = {
      id: querySnapshot.id,
      ...querySnapshot.data(),
    };
    return {
      success: true,
      message: "Collection fetched successfully!",
      data: data,
    };
  } catch (e) {
    console.error("Error getting collection: ", e);
    return {
      success: false,
      message: e,
      data: null,
    };
  }
};


export const deleteDocument = async (collectionName, documentId) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", documentId);
    return {
      success: true,
      message: "Document deleted successfully!",
    };
  } catch (e) {
    console.error("Error deleting document: ", e);
    return {
      success: false,
      message: e,
    };
  }
};
