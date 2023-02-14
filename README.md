# REST API Project

## Overview
This project provides a REST API that allows clients to interact with a database storing user information. The API allows clients to perform CRUD (create, read, update, delete) operations on the users collection.

## API Endpoints
The following endpoints are available for this API:

### Get All Users
- Method: GET
- URL: /api/users
- Response:
  - 200: An array of user objects

### Get User by ID
- Method: GET
- URL: /api/users/:id
- Response:
  - 200: A single user object
  - 404: User not found

### Create User
- Method: POST
- URL: /api/users
- Request Body:
  - email (string)
  - name (string)
- Response:
  - 201: User created
  - 400: Bad request

### Update User
- Method: PUT
- URL: /api/users/:id
- Request Body:
  - email (string)
  - name (string)
- Response:
  - 200: User updated
  - 400: Bad request
  - 404: User not found

## Running the Project
- Clone the repository to your local machine
- Run `npm install` to install dependencies
- Start the API by running `npm start`

## Technologies Used
- Node.js
- Express.js
- TypeScript
- Firebase Firestore

## Contributing
To contribute to this project, please submit a pull request.
