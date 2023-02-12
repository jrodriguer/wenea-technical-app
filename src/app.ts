import express from 'express';
import firebase from 'firebase';

const app = express();
const port = 5000;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXWEC_FNsxqHaHiqIipKjoMmf16nhaMzM",
  authDomain: "wenea-thechnical.firebaseapp.com",
  databaseURL: "https://wenea-thechnical-default-rtdb.firebaseio.com",
  projectId: "wenea-thechnical",
  storageBucket: "wenea-thechnical.appspot.com",
  messagingSenderId: "449693082463",
  appId: "1:449693082463:web:045a2f70101f0b601b4cea",
  measurementId: "G-KZM6M2T4V1"
};
firebase.initializeApp(firebaseConfig);

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
