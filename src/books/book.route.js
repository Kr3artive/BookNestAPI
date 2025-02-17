const express = require("express");
const {
  addBooks,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../books/book.controller");
const {validateBook} = require("../books/book.validate")

const router = express.Router();

// Route to add a new book
router.post("/addbook", validateBook, addBooks);

// Route to get all books
router.get("/allbooks", getAllBooks);

// Route to get a book by ID
router.get("/book/:id", getBookById);

// Route to update a book by ID
router.put("/book/:id", validateBook, updateBook);

// Route to delete a book by ID
router.delete("/deletebook/:id", deleteBook);

module.exports = router;
