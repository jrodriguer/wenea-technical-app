import express from 'express';
import firebase from 'firebase';
import * as admin from 'firebase-admin';

const app = express();
const port = 5000;

import { firebaseConfig } from './firebaseConfig';

admin.initializeApp(firebaseConfig);
const db = admin.firestore();

// User registration endpoint
app.post('/register', (req, res) => {
  // Add code to handle user registration
});

// User login endpoint
app.post('/login', (req, res) => {
  // Add code to handle user login
});

// User edit endpoint
app.put('/edit', (req, res) => {
  // Add code to handle user editing
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
