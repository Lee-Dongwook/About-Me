import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export const getDataFromDataBase = async <T>(
  collectionName: string
): Promise<T[]> => {
  const querySnapshot = await getDocs(collection(dataBase, collectionName));

  const dataSet = querySnapshot.docs.map((doc) => doc.data() as T);

  return dataSet;
};
