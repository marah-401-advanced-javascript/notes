'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(() => {
    return {
       add: "my note",
    };
});

describe('INPUT MODULE', () => {
    
    describe('getAction()', () => {
        it('asks to enter a valid action if no action was entered', () => {
          const options = new Input();
          expect(options.getAction()).toEqual('Enter a valid action');
        });
        it('asks to enter a valid action if an invalid action was entered', () => {
          const options = new Input();
          expect(options.getAction('marah')).toEqual('Enter a valid action');
        });
        it('uses the right action when specified', () => {
          const options = new Input();
          expect(options.getAction(options.action)).toEqual(options.action);
        });
    });

    describe('getPayload()', () => {
        it('return undefined when input is not specified', () => {
          const options = new Input();
          expect(options.getPayload()).toEqual(undefined);
        });
        it('returns string when string is specified', () => {
          const options = new Input();
          expect(options.getPayload(options.payload)).toEqual(options.payload);
        });
    });

    describe('valid()', () => {
        it('respects a proper object', () => {
          const options = new Input();
          options.action = 'a' || 'add';
          options.payload = 'hello';
          expect(options.valid()).toBeTruthy();
        });
        it('reject invalid object', () => {
          const options = new Input();
          options.payload = undefined;
          options.action = 'Enter a valid action';
          expect(options.valid()).toBeFalsy();
        });
      });
});
   

