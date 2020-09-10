// const add = require("./utils.js");

// const sum = add(1, 3);

// console.log(sum);
// const note = require("./notes.js");

// const message = note();

// console.log(message);

// const validator = require("validator");

// console.log(
//   validator.isURL(
//     "https:/learning.oreilly.com/videos/the-complete-node-js/9781789955071/9781789955071-video3_4"
//   )
// );

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
// console.log(chalk.red.inverse.bold("Hello!"));

//Customize yargs version//
yargs.version("1.1.0");

//Create add comment//
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});
// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNote();
  },
});
yargs.command({
  command: "read",
  describe: "Reading the notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});
console.log(yargs.argv);
