const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre : {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    publishedDate: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", BooksSchema);
