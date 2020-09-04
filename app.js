const express = require("express");
const mongoose = require("mongoose");
const { MONGO_DATABASE_URL } = require("./config");

const app = express();
const booksRoutes = require("./routes/books");

app.use(express.json());

// connect mongodb
mongoose
  .connect(MONGO_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`MongoDatabase Connected`))
  .catch((err) => {
    console.log(err);
    console.log("Errror Occured");
  });

//   routes
app.use("/books", booksRoutes);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
