const { Note } = require("../model/note_model");

const addNotes = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    if (!title) {
      res.send("title is missing!");
    }
    if (!content) {
      res.send("content is missing!");
    }
    if (!tags || tags.length < 1) {
      res.send("atleast one tag you have to add");
    }
    const noteObj = new Note({
      title,
      content,
      tags,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await noteObj.save();
    res.send("note saved");
  } catch (err) {
    console.log("error in addNote", err);
    res.send("server error");
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    return res.json(notes);
  } catch (error) {
    console.log("erron on getNotes", error);
    return res.staus(500).send("server error");
  }
};
const getNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findOne({ _id: id });
    return res.json(note);
  } catch (error) {
    console.log("error in getNotes", error);
    return res.status(500).send("server error");
  }
};

const updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    let note = await Note.findOne({ _id: id });
    if (!note) {
      return res.send("note did not found");
    }
    const { updateTitle, updateContent, updateTags } = req.body;
    note.title =
      updateTitle == "" || updateTitle == undefined ? note.title : updateTitle;
    note.content =
      updateContent == "" || updateContent ? note.content : updateContent;
    await note.save();
    return res.json({ data: note, msg: "note updated" });
  } catch (error) {
    console.log("error in updateNote", error);
    return res.status(500).send("error");
  }
};

const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    let newData = await Note.deleteOne({ _id: id });
    return res.send("note has deleted");
  } catch (error) {
    console.log("error in deleteNote", error);
    res.status(500).send("server error");
  }
};

module.exports = { addNotes, getNotes, getNote, updateNote, deleteNote };
