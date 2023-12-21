const mongoose = require("mongoose");
const { Configuration, OpenAIApi } = require("openai");

const bookSuggestions = async (req, res) => {
  const booksModel = mongoose.model("books");

  const getBooks = await booksModel.find({});

  const configuration = new Configuration({
    apiKey: process.env["OPENAI_API_KEY"],
  });

  const openai = new OpenAIApi(configuration);

  const prompt =
    "Give me 10 book suggestions based on these books: " + getBooks.toString();

  console.log(prompt);

  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  res.json({
    status: "Hello from AI",
    suggestions: chatCompletion.data.choices[0].message.content,
  });
};

module.exports = bookSuggestions;
