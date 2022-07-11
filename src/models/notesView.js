class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    const addNoteButtonEl = document.querySelector('#add-notes-button');
    const userInputEl = document.querySelector('#user-input');

    addNoteButtonEl.addEventListener('click', () => {
      this.api.createNote(userInputEl.value);
      this.model.addNote(userInputEl.value);
      this.displayNotes();
    });
  }

  displayNotes() {
    const notes = this.model.getNotes();
    document.querySelectorAll('.note').forEach((note) => {
      note.remove();
    });

    // For each note, create and append a new element on the main container
    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
    document.querySelector('#user-input').value = '';
  }

  displayNotesFromApi() {
    this.api.loadNotes((response) => {
      response.forEach((note) => {
        this.model.setNotes(note);
        this.displayNotes();
      });
    });
  }
}

module.exports = NotesView;
