const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const server = express();
server.use(express.json());

const PORT = process.env.PORT;
const mongodb = process.env.MongoUrl;

const BookRoutes = require("./src/books/book.route.js")


mongoose
  .connect(mongodb, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch((error) => console.log("CONNECTION ERROR", error));


server.get("/", (req, res) => {
  res.send("BookNestAPI IS ACTIVE...");
});

server.use("/books", BookRoutes)

server.listen(PORT, () => {
  console.log("SERVER IS ACTIVE AT http://localhost:4000");
});
