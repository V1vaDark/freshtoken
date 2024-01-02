import { db } from "../authentication/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const fetchAllCoins = async () => {

  const coinCollectionRef = collection(db, "projects");
  const data = await getDocs(coinCollectionRef);
  const results = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  if (!results) {
    return false;
  }

  return results;
};

export const getCoinById = async (id) => {
  const coins = await fetchAllCoins();

  const results = coins.filter((coin) => {
    return coin.id === id;
  });

  return results;
};