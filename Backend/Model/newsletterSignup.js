const mongoose = require("mongoose");
const newsLetterSignUpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
  },
});

module.exports = mongoose.model(
  "NewsLetterSignUpModel",
  newsLetterSignUpSchema
);
