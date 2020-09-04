const Books = require("../../models/Books");

// Get all books
const getBookList = async (req, res) => {
  try {
    const books = await Books.find();
    if (!books) throw Error("BookList Not Found");
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ message: err });
  }
  const body = Books(req.body);
  console.log(body);
};
// getBookByISBN
const getBookByISBN = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) throw Error("Enter Valid ISBN");
    res.status(200).json(book);
    // const detail = await Books(req.params);
    // console.log(detail);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
const createBookList = async (req, res) => {
  const addBook = new Books(req.body);
  try {
    const book = await addBook.save();
    if (!book) throw Error("Oops Something wrong while adding book");
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const deleteBookFromCollection = async (req, res) => {
  try {
    const deleteBook = await Books.findByIdAndDelete(req.params.id);
    if (!deleteBook) throw Error(`Book have ${id} not in  List`);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const updateBookDetail = async (req, res) => {
  try {
    const updateBook = await Books.findByIdAndUpdate(req.params.id, req.body);
    if (!updateBook) throw Error("Oops Something wrong details not updated");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
module.exports = {
  getBookList,
  getBookByISBN,
  createBookList,
  deleteBookFromCollection,
  updateBookDetail,
};
