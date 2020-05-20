'use strict';

require('dotenv').config();
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const options = new Input();
const myNote = new Note(options);
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// options.valid() ? myNote.execute(options).then(mongoose.disconnect) : help() ;
options.valid() ? myNote.execute(options): help() ;


// we can use this function if the condition is false:
function help() {
  console.log(`
    TO ADD A NOTE:
    node index.js --add <ADD YOUR NOTE HERE> --category <ADD YOUR CATEGORY HERE>
    OR
    node index.js --a <ADD YOUR NOTE HERE> --c <ADD YOUR CATEGORY HERE>
    
    TO DELETE A NOTE:
    node index.js --delete <NOTE ID> 
    OR
    node index.js --d <NOTE ID> 

    TO LIST NOTES:
    node index.js --list 
    node index.js --list <certain category> 
    OR
    node index.js --l
    node index.js --l <certain category> 
    `);
  process.exit();
} 