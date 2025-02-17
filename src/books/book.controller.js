const { validationResult } = require("express-validator");
const Books = require("../models/books");

// Add a new book
exports.addBooks = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, author, genre, price, publishedDate } = req.body;
    const newBook = new Books({ title, author, genre, price, publishedDate });
    await newBook.save();

    res.status(201).json({ message: "BOOK ADDED SUCCESSFULLY", newBook });
  } catch (error) {
    res.status(500).json({ message: "ERROR ADDING A NEW BOOK", error: error.message });
  }
};

// Retrieve all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "ERROR FETCHING BOOKS", error: error.message });
  }
};

// Retrieve a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "BOOK NOT FOUND" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "ERROR FETCHING BOOK", error: error.message });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: "BOOK NOT FOUND" });
    }
    res.status(200).json({ message: "BOOK UPDATED SUCCESSFULLY", updatedBook });
  } catch (error) {
    res.status(500).json({ message: "ERROR UPDATING BOOK", error: error.message });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Books.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "BOOK NOT FOUND" });
    }
    res.status(200).json({ message: "BOOK DELETED SUCCESSFULLY" });
  } catch (error) {
    res.status(500).json({ message: "ERROR DELETING BOOK", error: error.message });
  }
};