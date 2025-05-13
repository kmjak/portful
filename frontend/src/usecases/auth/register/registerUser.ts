import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  User,
  UserCredential,
} from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

interface RegisterUserProps {
  readonly email: string;
  readonly password: string;
}

export default async function registerUser({
  email,
  password,
}: RegisterUserProps): Promise<boolean> {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user: User = userCredential.user;

    await sendEmailVerification(user);
    await auth.signOut();

    return true;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error:", error);
    }
    return false;
  }
}
