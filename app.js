require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: 'https://book-cms.netlify.app',
  credentials: true
};
// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use("/books", require("./routes/book-routes")); // localhost:5000/books
app.use("/auth", require("./routes/auth-routes")); // localhost:5000/auth

mongoose.set('strictQuery', false);
mongoose.connect(
  "mongodb+srv://coe:test@cluster0.m8xlfue.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);

const port = process.env.PORT || 5000
app.listen(port , () => {
    console.log("Server is running at port", port);
})