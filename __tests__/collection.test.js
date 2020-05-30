'use strict';

require('@code-fellows/supergoose');

const Notes = require('../models/notes-collection.js');
// const note = new Note();

// describe('Notes collection', ()=> {
//   it('create() a new note', ()=> {
//     const newNote = {payload: 'new note text', category: 'testing'};
//     const newSavedNote = {payload: 'new note text', category: 'testing'};
//     return Notes.create(newNote).then((record)=> {
//       Object.keys(newSavedNote).forEach(key => {
//         expect(record[key]).toEqual(newSavedNote[key]);
//       });
//     });
//   });
  
//   it('read() notes from category', ()=> {
//     const newNote = {payload: 'new note text', category: 'test1'};
//     const expectedNote = {payload: 'new note text', category: 'test1'};
    
//     const newSavedNote = {payload: 'new note text', category: 'test1'};
//     return Notes.create(newNote).then((record)=> {
//       const listCommand = {listVal: record.category};
//       return Notes.get(listCommand).then(note=> {
//         note.forEach(item => {
//           Object.keys(newSavedNote).forEach(key=> {
//             expect(item[key]).toEqual(expectedNote[key]);
//           });
//         });
//       });
//     });
//   });
  
// });

describe('note Model', () => {
    it('can create() a new food item ', () => {
      let obj = { payload: 'test text 1', category: 'school test' };
      return Notes.create(obj)
        .then(record => {
          Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key]);
          });
        });
    });
  
    it('can get(category) a note item', () => {
      let obj = { payload: 'test text 1', category: 'school test' };
      return Notes.get(obj.category)
        .then(item => {
          Object.keys(obj).forEach(key => {
            expect(item[0][key]).toEqual(obj[key]);
          });
        });
    });
  
    it('can get() a note item()', () => {
      let obj = { payload: 'test text 2', category: 'tesla test' };
  
      let allObjects = [{ payload: 'test text 1', category: 'school test' },
        { payload: 'test text 2', category: 'tesla test' },
      ];
  
      return Notes.create(obj)
        .then(() => {
          return Notes.get()
            .then(items => {
              allObjects.forEach((e, idx) => {
                Object.keys(obj).forEach(key => {
                  expect(items[idx][key]).toEqual(e[key]);
                });
              });
            });
        });
    });
  
    // it('can update(id,text) a note item', () => {
    //   let obj = { payload: 'test text 3', category: 'javascript test' };
    //   let payload = 'test new text updated';
    //   let objAfterUpdate = { payload: payload, category: 'javascript test' };
    //   return Notes.create(obj)
    //     .then(createdItem => {
    //       let id = createdItem._id;
    //       return Notes.update(id, payload)
    //         .then(() => {
    //           return Notes.get(objAfterUpdate.category)
    //             .then(item => {
    //               Object.keys(obj).forEach(key => {
    //                 expect(item[0][key]).toEqual(objAfterUpdate[key]);
    //               });
    //             });
    //         });
    //     });
    // });
  
    it('can delete() a new food item ', () => {
      let obj = { payload: 'test text 4', category: 'corona test' };
      return Notes.create(obj)
        .then(record => {
          let itemId = record._id;
          return Notes.delete(itemId)
            .then(() => {
              return Notes.get()
                .then(items => {
                  items.forEach(e => {
                    Object.keys(obj).forEach(key => {
                      expect(e[key]).not.toEqual(obj[key]);
                    });
                  });
                });
            });
  
  
        });
    });
  });