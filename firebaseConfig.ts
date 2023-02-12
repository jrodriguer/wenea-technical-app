import * as admin from 'firebase-admin';

const privateKey = JSON.parse(process.env.FIREBASE_PRIVATE_KEY!);
const databaseURL = process.env.FIREBASE_DATABASE_URL!;

const firebaseConfig = {
  credential: admin.credential.cert(privateKey),
  databaseURL: databaseURL,
};