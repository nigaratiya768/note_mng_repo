require("dotenv").config();
const express = require("express");
const {
  addNotes,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
} = require("./controller/notes_control");
const { connectDB } = require("./connect_database/connect_withDB");
const user_router = require("./route/user_routes");
const app = express();
connectDB();
app.use(express.json());

console.log("env", process.env.NODE_ENV);
const PORT = process.env.NODE_ENV == "development" ? 4000 : 80;
app.use("/api", user_router);

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.post("/api/notes", addNotes);
app.get("/api/notes", getNotes);
app.get("/api/notes/:id", getNote);
app.put("/api/notes/:id", updateNote);
app.delete("/api/notes/:id", deleteNote);

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
