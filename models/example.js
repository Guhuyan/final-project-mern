const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
