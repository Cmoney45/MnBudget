// models.Show.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  users: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  type: {
    type: String,
    requried: true
  },
  amount: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
