'use strict';

const minimist = require('minimist');

// sample input : node index.js --add "my note"
class Input {
  constructor(){
    const argv = minimist(process.argv.slice(2));
    const payloadVar = (argv.a)? (argv.a) : (argv.add);
    // console.log('minimist()', argv);
    this.action = this.getAction(Object.keys(argv)[1]);
    this.payload = this.getPayload(payloadVar);
  }

  
  getAction(action) {
    const vaildActions = /(^a$)|(^add$)/i;
    return vaildActions.test(action) ? action : 'Enter a valid action';
  }

  getPayload(payload) {
    return payload ? payload : undefined;
  }

  valid() {
    return this.payload && this.action;
  }
  
}

module.exports = Input;

