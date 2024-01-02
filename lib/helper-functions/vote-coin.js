import { db, serverTimestamp } from "../authentication/firebase-config";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { collection, setDoc, doc as docRef } from "firebase/firestore";
import { getSession } from "next-auth/client";

export const voteCoin = async (vote, id) => {
  const coinDoc = doc(db, "projects", id);

  const session = await getSession();
  const userEmail = session ? session.user.email : null;

  if (!userEmail) {
    return "failed";
  }

  const votersCollection = collection(coinDoc, "voters");
  const existingVoterDoc = await getDoc(docRef(votersCollection, userEmail));

  if (existingVoterDoc.exists()) {
    const timestamp = existingVoterDoc.data()?.timestamp;
  
    if (timestamp && timestamp.toDate() > new Date()) {
      return "timestampNotReached";
    } else {
      const newField = {
        vote: vote + 1,
      };
  
      try {
        await updateDoc(coinDoc, newField);
      } catch (error) {
        return "failed";
      }
  
      const voterDocRef = doc(votersCollection, userEmail);
  
      const existingVoteee = existingVoterDoc.data()?.voteee || 0;
  
      const currentTime = new Date();
      currentTime.setMinutes(currentTime.getMinutes() + 60);
  
      try {
        await setDoc(voterDocRef, {
          voteee: existingVoteee + 1,
          timestamp: currentTime,
        });
      } catch (error) {
        return "failed";
      }
  
      return "success";
    }
  } else {
    const voterDocRef = doc(votersCollection, userEmail);
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + 60);
  
    try {
      await setDoc(voterDocRef, {
        voteee: 1,
        timestamp: currentTime,
      });
  
      const newField = {
        vote: vote + 1,
      };
  
      await updateDoc(coinDoc, newField);
  
      return "success";
    } catch (error) {
      return "failed";
    }
  }
}  