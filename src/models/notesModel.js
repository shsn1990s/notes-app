class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes = () => {
    return this.notes;
  };

  addNote = (note) => {
    this.notes.push(note);
  };

  setNotes = (note) => {
    this.notes.push(note);
  };

  reset = () => {
    this.notes = [];
  };
}
module.exports = NotesModel;
