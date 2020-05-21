'use strict';

const Note = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('NOTE Module', () => {
    it('does nothing when execute() is called with invalid data', () => {
        const myNote = new Note();
        myNote.execute();
        expect(console.log).not.toHaveBeenCalled();
    });
    it('logs data when execute() is called with valid data', () => {
        const myNote = new Note();
        myNote.execute({ action: 'add', payload: 'my note', action2:'category', category:'work' });
        expect(console.log).toHaveBeenCalled();
    });
  });