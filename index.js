const express = require("express");
const {
  addNotes,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
} = require("./controller/notes_control");
const { connectDB } = require("./connect_database/connect_withDB");
const app = express();
connectDB();
app.use(express.json());

const PORT = 4000;

app.post("/api/notes", addNotes);
app.get("/api/notes", getNotes);
app.get("/api/notes/:id", getNote);
app.put("/api/notes/:id", updateNote);
app.delete("/api/notes/:id", deleteNote);

app.listen(PORT, () => {
  console.log("server is running");
});
