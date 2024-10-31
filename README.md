# Issue Management API

A RESTful API built with Node.js, Express, and MongoDB for managing issues/tickets.

## Features

- CRUD operations for issues
- JWT Authentication
- MongoDB integration
- Request logging with Morgan
- Error handling

## Prerequisites

- Node.js
- MongoDB Atlas account
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure MongoDB connection:
   - Navigate to `config/database.js`
   - Replace `<user_name>` and `<password>` with your MongoDB Atlas credentials

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/issues` | Retrieve all issues |
| GET | `/issues/:id` | Retrieve a specific issue |
| POST | `/issues` | Create a new issue |
| PUT | `/issues/:id` | Update an existing issue |
| DELETE | `/issues/:id` | Delete an issue |

### Request Body Format (POST/PUT)

## Running the Application

```bash
npm start
```

The server will start on port 3001 by default.

## Authentication

The API uses JWT for authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your_token>
```

## Dependencies

The project uses the following main dependencies:
- Express.js
- Mongoose
- JSON Web Token (JWT)
- Morgan (logging)
- Body Parser

## Error Handling

The API includes error handling for:
- Database connection errors
- Invalid requests
- Authentication errors
- Resource not found errors

## Author

vlgunarathne
