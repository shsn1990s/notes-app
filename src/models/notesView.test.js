/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesApi = require('./notesApi');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

require('jest-fetch-mock').enableMocks();

//jest.mock('./notesApi');

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another one');

    // 2. Clicks Add Notes button to call the displayNotes
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
  it('displays a note on button click', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const addNotesButtonEl = document.querySelector('#add-notes-button');
    const userInputEl = document.querySelector('#user-input');

    // 1. Setting up model and view
    const model = new NotesModel();
    const api = {
      createNote: () => {
      } 
    }
    const view = new NotesView(model, api);

    // 2. Enter note in field and click Add Notes button to call the displayNotes method
    userInputEl.value = 'Hello!';
    addNotesButtonEl.click();
    expect(document.querySelector('div.note').innerText).toEqual('Hello!');

  });
  it('displays correct number of notes if displayNotes is called twice', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');

    // 2. Clicks Add Notes button to call the displayNotes
    view.displayNotes();
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
  });
  it('displayNotesFromApi method calls the loadNotes method from API class', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockApi = {
      loadNotes: () => {
        model.setNotes("This note is coming from the server");
        view.displayNotes();
      } 
    }
    const model = new NotesModel();
    const view = new NotesView(model, mockApi);
    view.displayNotesFromApi();
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual(
      "This note is coming from the server"
    );
  });
});
