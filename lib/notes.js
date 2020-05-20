'use strict';

const mongoose = require('mongoose');
const Notes = require('./notes-shcema.js');

class Note{
  constructor(value) {
    this.action = value.action;
    this.payload = value.payload;
    this.id = parseInt(Math.random()*1000);
    this.action2 = value.action2 ;
    this.category = value.category;
  }  

  execute(value) {
    if(value.action === 'add' || value.action === 'a') {
      return this.add(value);
    }
    else if(value.action === 'delete' || value.action === 'd') {
      return this.delete(value);
    }
    else if(value.action === 'list' || value.action === 'l') {
      return this.list(value);
    }
  }

  async add(value) {
    // console.log(`action: ${this.action} ,
    // my note: ${this.payload} ,
    // action2: ${this.action2} ,
    // my category: ${this.category} ,
    // ID : ${this.id}`);
    const record = new Notes(value);
    console.log('recored :',record);
    const saved = await record.save();
    console.log('note saved :',saved);
    return saved;
  }

  async delete(value) {
    const deleted = await Notes.findByIdAndDelete(value.payload) ;
    console.log('deleted note:',value.payload);
    return deleted;
  }
  
  async list() {
    const listed =  await Notes.find({}) ;
    if (this.payload) {
      for ( let i=0 ; i<listed.length ; i++){
        if (this.payload===listed[i].category){
          console.log("only certain category: ", listed[i]);  
        }
      }
    }
    else{
    console.log("all in db: ", listed);  
    }
  }
}

module.exports = Note;
