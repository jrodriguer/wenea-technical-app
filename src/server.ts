import * as dotenv from 'dotenv';
import * as firebase from 'firebase-admin';

import app from './app';
import { firebaseConfig } from './config/firebaseConfig';


dotenv.config();
firebase.initializeApp(firebaseConfig);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
