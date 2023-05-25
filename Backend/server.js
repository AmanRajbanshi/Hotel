const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

require("dotenv").config();
const cors = require("cors");

// Global Middlewares
app.use(cors());
app.use(express.json());

//Routes Imports
const contactRoute = require("./Routes/contactRoute");
const reservationRoute = require("./Routes/reservationRoute");
const newsLetterSignUpRoute = require("./Routes/newsLetterSignUpRoute");

const errorHandler = require("./Middlewares/error");

//Routes Middlewares
app.use("/api/v1/", contactRoute);
app.use("/api/v1/", reservationRoute);
app.use("/api/v1/", newsLetterSignUpRoute);

app.use(errorHandler);

const mongoDbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

mongoDbConnection();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
