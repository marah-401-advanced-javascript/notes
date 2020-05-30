'use strict';

const mongoose = require('mongoose');
// const Notes = require('../models/notes-shcema.js');
const notes = require('../models/notes-collection.js');


class Note{
  constructor(value) {
    this.action = value.action;
    this.payload = value.payload;
    this.id = parseInt(Math.random()*1000);
    this.action2 = value.action2 ;
    this.category = value.category;
  }  

  execute(value) {
    if (value){
      if(this.action === 'add' || this.action === 'a') {
        return this.add(value);
      }
      else if(this.action === 'delete' || this.action === 'd') {
        return this.delete(value);
      }
      else if(this.action === 'list' || this.action === 'l') {
        return this.list(value);
      }
      else if(this.action === 'update' || this.action === 'u') {
        return this.update(value);
      }
    }
    
  }

  async add(value) {
    // const record = new Notes(value); //lab4
    // console.log('recored :',record);
    // const saved = await record.save();
    const saved = await notes.create(value);//lab4
    console.log('note saved :',saved);
    return saved;
  }

  
  async list() {
    // const listed =  await Notes.find({}) ;//lab4
    const listed =  await notes.get({}) ;//lab4
    if (this.payload) {
      for ( let i=0 ; i<listed.length ; i++){
        if (this.payload===listed[i].category){
          console.log(`
          ${listed[i].payload}

            Category: ${listed[i].category}        ID: ${listed[i]._id}
          ----------------------------------------------------------`);          
        }
      }
    }
    
    else{
      for ( let i=0 ; i<listed.length ; i++){
        console.log(`
        ${listed[i].payload}

          Category: ${listed[i].category}        ID: ${listed[i]._id}
        ----------------------------------------------------------`);          
        
      }
    }
  }

  async delete(value) {
    // const deleted = await Notes.findByIdAndDelete(value.payload) ;//lab4
    const deleted = await notes.delete(value.payload) ;//lab4
    console.log('deleted note:',value.payload);
    return deleted;
  }
  

  async update(value,obj){
    // const updated = await Notes.findByIdAndUpdate(value.payload,obj) ;//lab4
    const updated = await notes.update(value.payload,obj) ;//lab4
    console.log('updated note:',value.payload,obj);
    return updated;
  }

}

module.exports = Note;
