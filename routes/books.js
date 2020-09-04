const express = require("express");
const {
  getBookList,
  createBookList,
  getBookByISBN,
  deleteBookFromCollection,
  updateBookDetail,
} = require("./controllers/books");
const router = express.Router();

router.get("/", getBookList);
router.get("/:id", getBookByISBN);
router.post("/", createBookList);
router.delete("/:id", deleteBookFromCollection);
router.patch("/:id", updateBookDetail);
module.exports = router;
