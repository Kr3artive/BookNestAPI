BookNestAPI

BookNestAPI is a RESTful API built with Node.js and Express.js to manage a collection of books. It provides functionalities such as adding, updating, deleting, and retrieving books. The API serves as the backend for a book management system, ensuring seamless book collection management.

Features
✅ CRUD Operations – Add, update, delete, and retrieve books.
✅ MongoDB Database – Data is stored in MongoDB.
✅ Express.js Framework – A lightweight and efficient backend framework for building RESTful APIs.

Tech Stack
Node.js – JavaScript runtime for server-side development.
Express.js – Web framework for building APIs.
MongoDB – NoSQL database for storing book data.
Mongoose – MongoDB object modeling tool.
Installation
Prerequisites
Ensure you have the following installed on your machine:

Node.js
MongoDB (Local instance or cloud-based MongoDB Atlas)
Postman (or any API testing tool, optional)
Setup
Clone the repository:

sh
Copy
Edit
git clone https://github.com/Kr3artive/BookNestAPI.git
Navigate into the project folder:

sh
Copy
Edit
cd BookNestAPI
Install dependencies:

sh
Copy
Edit
npm install
Create a .env file in the root directory and add the following environment variables:

ini
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
Run the application:

sh
Copy
Edit
npm start
The API will be running at: http://localhost:5000

API Endpoints
1. Add a new book
Endpoint: POST /addbook
Description: Adds a new book to the collection.
Request Body:
json
Copy
Edit
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Genre",
  "published_date": "YYYY-MM-DD"
}
Response:
Status: 201 Created
Body: Newly created book details
2. Get all books
Endpoint: GET /allbooks
Description: Fetches all books in the collection.
Response:
Status: 200 OK
Body: Array of book objects
3. Get a specific book by ID
Endpoint: GET /book/:id
Description: Fetches details of a specific book by ID.
Response:
Status: 200 OK
Body: Book details
4. Update a book
Endpoint: PUT /book/:id
Description: Updates a book's details by ID.
Request Body:
json
Copy
Edit
```{
  "title": "Updated Title",
  "author": "Updated Author",
  "genre": "Updated Genre",
  "published_date": "YYYY-MM-DD"
}
Response:
Status: 200 OK
Body: Updated book details
5. Delete a book
Endpoint: DELETE /deletebook/:id
Description: Deletes a book by ID.
Response:
Status: 200 OK
Body: Confirmation message
Postman Documentation

The API has been tested using Postman, and the detailed documentation is available here:

🔗 BookNestAPI Postman Docs

Author
👤 Abiye Desire Omiete
📧 Email: abiyerowland@gmail.com
📌 GitHub: Kr3artive
