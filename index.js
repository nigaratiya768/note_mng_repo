const express = require("express");
const { addNotes } = require("./controller/notes_control");
const { connectDB } = require("./connect_database/connect_withDB");
const app = express();
connectDB();
app.use(express.json());

const PORT = 4000;

app.post("/api/notes", addNotes);
app.listen(PORT, () => {
  console.log("server is running");
});
