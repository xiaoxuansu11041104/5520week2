import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { database } from "./firebaseSetup";


export async function writeToDB(data, collectionName) {
  try {
    const docRef = await addDoc(collection(database, collectionName), data);
    console.log(docRef);
  } catch (err) {
    console.log("write to db ", err);
  }
}

export async function deleteFromDB(deletedId, collectionName) {
  try {
    await deleteDoc(doc(database, collectionName, deletedId));
  } catch (err) {
    console.log("delete from DB ", err);
  }
}

export async function deleteAllFromDB(collectionName) {
  try {
    //get all the documents in the collection
    const querySnapshot = await getDocs(collection(database, collectionName));
    querySnapshot.forEach((docSnapshot) => {
      deleteDoc(doc(database, collectionName, docSnapshot.id));
    });
  } catch (err) {
    console.log("delete all ", err);
  }
}

export async function setGoalWarning(goalId) {
  try {
    const goalRef = doc(database, "goals", goalId); // Get a reference to the specific document
    await updateDoc(goalRef, {
      warning: true, // Add or update the warning field
    });
    console.log(`Goal with ID ${goalId} updated with warning: true`);
  } catch (error) {
    console.error("Error updating goal with warning: ", error);
  }
}