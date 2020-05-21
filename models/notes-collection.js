'use strict';

const notesSchema = require('../models/notes-shcema.js').model;//lab4


class Notes {
  constructor() {}  

  create(obj){
    let newRecord = new notesSchema(obj);
    return  newRecord.save();
  }

  get(val){
    const listed = notesSchema.find({}) ;//lab4
    return listed;
    // if (val) {
    //     return notesSchema.findOne({ val });
    // } else {
    //     return notesSchema.find({});
    // }
  }

  delete(id){
    const deleted =  notesSchema.findByIdAndDelete(id.payload) ;//lab4
    return deleted;
    // return  notesSchema.findOneAndDelete({ _id});
  }

  update(value, obj){
    const updated =  notesSchema.findByIdAndUpdate(value.payload, obj, { new: true }) ;//lab4
    return updated;
    // return notesSchema.findByIdAndUpdate(_id, obj, { new: true });
  }

}

module.exports = new Notes(); 