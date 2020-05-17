'use strict';

const minimist = require('minimist');


// sample input : node index.js --action "add" --payload "my note"

function Input() {
  const argv = minimist(process.argv.slice(2));
  console.log('minimist()', argv);
  this.action = this.getAction(argv.action);
  this.payload = this.getNote(argv.payload);
}


Input.prototype.getAction = function (action) {
  const vaildActions = /add|a/i;
  return vaildActions.test(action) ? action : 'Enter a valid action';
};


Input.prototype.getNote = function (note) {
    return note ? note : 'Error: invalid note';
  };

module.exports = Input;
