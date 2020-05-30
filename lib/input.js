'use strict';

const minimist = require('minimist');
const schema = require('../models/notes-shcema.js').schema;
const Validator = require('./validator.js');

// sample inputs : 
// node index.js --add <my note> --category <work>
// node index.js --delete <note ID>
// node index.js --list 
// node index.js --list <certain category>


class Input {
  constructor(){
    const ArrOfInput = process.argv;
    const slicedArr = process.argv.slice(2);
    const argvObj = minimist(slicedArr);
    // console.log('array of inputs:', process.argv);
    // console.log('sliced argv array:', process.argv.slice(2));
    // console.log('parsed obj:', argvObj);
    this.action = this.getAction(Object.keys(argvObj)[1]);
    this.payload = this.getPayload(slicedArr[1]) || slicedArr[1];
    this.action2 = this.getAction2(Object.keys(argvObj)[2]);
    this.category = this.getCategory(slicedArr[3]);
  }

  
  getAction(action) {
    const vaildActions = /(^a$)|(^add$)|(^d$)|(^delete$)|(^l$)|(^list$)|(^u$)|(^update$)/i;
    return vaildActions.test(action) ? action : 'Enter a valid action';
  }

  getPayload(payload) {
    return payload ? payload : undefined;
  }

  getAction2(action2) {
    const vaildActions = /(^c$)|(^category$)/i;
    return vaildActions.test(action2) ? action2 : 'Enter a valid action2';
  }

  getCategory(category) {
    return category ? category : 'defult';
  }

  valid() {
    // if(this.action === 'add' || this.action === 'a') {
    //     return this.payload && this.action && this.category && this.action2;
    //   }
    //   else if(this.action === 'delete' || this.action === 'd') {
    //     return this.payload && this.action;
    //   }
    //   else if(this.action === 'list' || this.action === 'l') {
    //     return this.payload ? this.payload && this.action : this.action ;      
    //   }  
      // else if(this.action === 'update' || this.action === 'u') {
      //   return this.payload && this.action;      
      // } 
      const validator = new Validator(schema);
      return validator.isValid(this);
  }
  
}

module.exports = Input;
