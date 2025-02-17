# BookNestAPI

BookNestAPI is a RESTful API built with Node.js and Express.js to manage a collection of books, providing functionalities such as adding, updating, deleting, and retrieving books. It is designed to serve as the backend for a book management system, providing a seamless experience for managing a collection of books.

## Features

- **CRUD Operations:** Add, update, delete, and retrieve books.
- **MongoDB Database:** Data is stored in MongoDB.
- **Express.js Framework:** Lightweight and efficient backend framework for building RESTful APIs.

## Tech Stack

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web framework for building APIs.
- **MongoDB:** NoSQL database to store book data.
- **Mongoose:** MongoDB object modeling tool.

## Installation
- cd BookNestAPI
- npm install

### Create your env file and your mongoDB URL and PORT

### Prerequisites

- Node.js
- MongoDB (local or cloud instance)
- Postman or any API testing tool (optional)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Kr3artive/BookNestAPI.git

API Endpoints

1. POST /addbook
Description: Add a new book to the collection.
Request Body:
title: String
author: String
genre: String
published_date: String (optional)
Response:
Status: 201 Created
Body: Newly created book.

2. GET /allbooks
Description: Get a list of all books.
Response:
Status: 200 OK
Body: Array of books.

3. GET /book/:id
Description: Get details of a specific book by ID.
Response:
Status: 200 OK
Body: Book details.

4. PUT /book/:id
Description: Update a book's details by ID.
Request Body:
title: String
author: String
genre: String
published_date: String (optional)
Response:
Status: 200 OK
Body: Updated book.

5. DELETE /deletebook/:id
Description: Delete a book by ID.
Response:
Status: 200 OK
Body: Confirmation message.
