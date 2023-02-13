import dotenv from 'dotenv';
import firebase from 'firebase-admin';
import express from 'express';

import router from './routes/user.route';
import { start } from './server';


dotenv.config();

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

start();

const app = express();

app.use('/signup', router);
app.use('/login', router);
app.use('/user/:userId', router);

export default app;
