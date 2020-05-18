'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const options = new Input();
const myNote = new Note(options);

options.valid() ? myNote.execute(options) : "" ;




// we can use this function if the condition is false:

// function help() {
//   console.log(`
//     Note app USAGE:
//      --a  ADD YOUR NOTE HERE
//      --add  ADD YOUR NOTE HERE
//     `);
//   process.exit();
// } 