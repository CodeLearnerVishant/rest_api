const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BooksSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  edition: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Books", BooksSchema);
