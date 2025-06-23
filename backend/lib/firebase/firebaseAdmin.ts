import admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import { serviceAccount } from "../../config/firebase/serviceAccount.ts";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}
export { admin };
