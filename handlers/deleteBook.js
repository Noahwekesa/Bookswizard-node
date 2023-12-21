const mongoose = require("mongoose");

const deleteBook = async (req, res) => {
  console.log(req.params);

  const booksModel = mongoose.model("books");

  await booksModel.deleteOne({
    _id: req.params.book_id,
  });

  res.json({
    status: "success",
    message: "Book deleted successfully!",
  });
};

module.exports = deleteBook;
