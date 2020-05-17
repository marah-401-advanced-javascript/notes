'use strict';
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const options = new Input();
const myNote = new Note(options);
myNote.execute(options);
