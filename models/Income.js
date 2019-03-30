// models.Income.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
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

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
