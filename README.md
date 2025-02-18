# BookNestAPI

BookNestAPI is a RESTful API built with Node.js and Express.js to manage book-related operations. It provides endpoints for users to browse, add, update, and delete books.

## Features
- CRUD operations for books
- Search and filtering
- Secure and scalable backend architecture

## Tech Stack
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variables management

## Installation

Clone the repository:
```sh
$ git clone https://github.com/Kr3artive/BookNestAPI.git
$ cd BookNestAPI
```

Install dependencies:
```sh
$ npm install
```

## Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Running the Server
To start the server in development mode:
```sh
$ npm run dev
```
For production:
```sh
$ npm start
```

## API Endpoints

### Books
- **GET** `/books/allbooks` - Get all books
- **GET** `/books/book/:id` - Get a single book by ID
- **POST** `/books/addbook` - Add a new book (Authenticated users only)
- **PUT** `/books/book/:id` - Update a book (Authenticated users only)
- **DELETE** `/books/deletebook/:id` - Delete a book (Authenticated users only)

### Postman Documentation
For a detailed API reference, check out the Postman documentation:
https://documenter.getpostman.com/view/39360280/2sAYXFhcrJ

## License
This project is licensed under the MIT License.
---

### Author
[Abiye Desire Omiete](https://github.com/Kr3artive)
