// models.Expense.js

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
  frequency: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  // End date not required as to be open ended.
  endDate: {
    type: Date,
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
