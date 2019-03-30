// models.User.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // What is the user's role in the app
  role: {
    type: String,
    required: true
  },
  // All unique info for the user
  info: {
    userName: {
      type: String,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
  },
  userIncome: [
    {
      type: Schema.Types.ObjectId,
      ref: "Income"
    }
  ],
  userExpense: [
    {
      type: Schema.Types.ObjectId,
      ref: "Expense"
    }
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
