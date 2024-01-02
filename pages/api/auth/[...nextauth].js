import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { loginDataValidation } from "../../../lib/validations/serverside-validations";
import { auth } from "../../../lib/authentication/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;

        const informationStatus = loginDataValidation(email, password);
        if (!informationStatus) throw new Error("Invalid Inputs");

        const user = await signInWithEmailAndPassword(auth, email, password);

        if (user.error) {
          throw new Error("No user found!");
        }

        return { email: user.user.email };
      },
    }),
  ],
});