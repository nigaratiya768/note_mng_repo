const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: Array,
  createdAt: Date,
  updatedAt: Date,
});
const Note = mongoose.model("note", noteSchema);

module.exports = { Note };
