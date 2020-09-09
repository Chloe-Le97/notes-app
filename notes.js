const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes is here";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((item) => item.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note title is duplicated, add other"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const removeItem = notes.filter((item) => item.title !== title);
  if (notes.length == removeItem.length) {
    console.log(chalk.red.inverse.bold("No note found!"));
  }
  if (notes.length > removeItem.length) {
    console.log(chalk.green.inverse.bold("Note removed!"));
  }
  saveNotes(removeItem);
};

const listNote = () => {
  const notes = loadNotes();
  const title = notes.map((item) => item.title);
  console.log(chalk.green.inverse("Your note title is here"));
  console.log(title);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
};
