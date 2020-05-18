'use strict';

class Note{
  constructor() {
  }  

  execute(value) {
    if(value){
      this.add(value);
    }
  }

  add(value) {
    this.action = value.action;
    this.payload = value.payload;
    this.id = parseInt(Math.random()*1000);
    console.log(`action: ${this.action} , my note: ${this.payload} , ID : ${this.id}`);
  }
}

module.exports = Note;
