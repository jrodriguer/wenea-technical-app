import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { signup, login, editUser } from './controllers/userController';


// Set up express app
const app: Express = express();
app.use(cors());
app.use(bodyParser.json());

// Define the REST API endpoints
app.post('/signup', signup);
app.post('/login', login);
app.put('/user/:userId', editUser);

export default app;
