const NotesModel = require('./notesModel.js');

describe('NotesModel', () => {
  it('return an empty array', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });
  it('returns two items from the getNotes method', () => {
    const model = new NotesModel();
    model.addNote('Buy Milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy Milk', 'Go to the gym']);
  });
  it('resets the notes and returns an empty array', () => {
    const model = new NotesModel();
    model.addNote('Buy Milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
