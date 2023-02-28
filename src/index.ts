import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import firebase from 'firebase-admin';
import express from 'express';

import routes from './routes/user.route';

dotenv.config();

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
