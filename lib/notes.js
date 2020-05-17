// const notes = {};

// notes.execute = function (opts) {
//   if (opts) {
//     console.log('Fetching', opts.action);
//     console.log('Method', opts.payload);
//   }
// };

// module.exports = notes;


function Note() {
  
}

Note.prototype.execute = function (value) {
  if (value.action === 'add'|| value.action === 'a') {
        this.add(value);
      }
  else{
    console.log('Enter a valid action');
  }    
};


Note.prototype.add = function (value) {
  this.action = value.action;
  this.payload = value.payload;
  this.id = parseInt(Math.random()*1000);
  console.log(`action: ${this.action} , my note: ${this.payload} , ID : ${this.id}`);
};

module.exports = Note;
