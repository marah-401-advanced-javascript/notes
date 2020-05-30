'use strict';

const mongoose = require('mongoose');

const notes = new mongoose.Schema({
  payload: { type: 'string', required: true },
  category: {type: 'string', required: true},
});

module.exports.schema = notes.obj;//lab4
module.exports.model = mongoose.model('notes', notes);
