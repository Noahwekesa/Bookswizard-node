const mongoose = require("mongoose");

const getBooks = async (req, res) => {
  const booksModel = mongoose.model("books");

  const getBooks = await booksModel.find({});

  res.json({
    status: "success",
    data: getBooks,
  });
};

module.exports = getBooks;
