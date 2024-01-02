import { auth } from "../../../lib/authentication/firebase-config";
import { signupDataValidation } from "../../../lib/validations/serverside-validations";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  deleteUser,
} from "firebase/auth";
import { db } from "../../../lib/authentication/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { setTimeout } from "timers/promises";

async function checkEmailVerification(user, maxAttempts = 18) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (user.emailVerified) {
      return true;
    }

    await setTimeout(5000);
    await user.reload();
  }

  return false;
}

async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Bad Request" });
    return;
  }

  const { displayName, email, password } = req.body;

  const informationStatus = signupDataValidation(displayName, email, password);

  if (!informationStatus) {
    res.status(422).json({ message: "Invalid Inputs" });
    return;
  }

  const usersCollectionRef = collection(db, "users");
  let user;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    user = userCredential.user;

    await sendEmailVerification(user);

    res.status(200).json({
      message: "Verification email has been sent. Please check your email.",
    });

    const isEmailVerified = await checkEmailVerification(user);

    if (isEmailVerified) {
      await addDoc(usersCollectionRef, {
        email,
        displayName,
        password,
      });
    } else {
      throw new Error("Email verification timed out");
    }
  } catch (error) {
    if (user) {
      await deleteUser(user);
    }
    res.status(422).json({
      message: "Account Creation Unsuccessful",
      error: error.message,
    });
    return;
  }
}

export default handler;