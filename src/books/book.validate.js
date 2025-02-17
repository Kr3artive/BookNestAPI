const { check } = require("express-validator");

exports.validateBook = [
  check("title").notEmpty().withMessage("Title is required."),
  check("author").notEmpty().withMessage("Author is required."),
  check("genre").notEmpty().withMessage("Genre is required."),
  check("price").isFloat({ min: 0 }).withMessage("Price must be a valid number."),
  check("publishedDate").isISO8601().withMessage("Published date must be a valid date."),
];