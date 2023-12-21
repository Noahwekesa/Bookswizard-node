const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const createBook = require("./handlers/createBook");
const editBook = require("./handlers/editBook");
const deleteBook = require("./handlers/deleteBook");
const getBook = require("./handlers/getBook");
const bookSuggestions = require("./handlers/bookSuggestions");
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("connection to mongoDB is successful!");
  })
  .catch(() => {
    console.log("Connection to mongodb failed!");
  });

//models..
require("./booksmodel");

//routes
app.post("/api/books", createBook);

app.path("/api/books", editBook);

app.delete("/api/books", deleteBook);

app.get("api/books", getBook);

// open ai
app.get("/api/ai", bookSuggestions);

app.listen(8000, () => {
  console.log("Server Started successfully!");
});
