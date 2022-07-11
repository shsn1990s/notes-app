const NotesApi = require('./models/notesApi');
const NotesModel = require('./models/notesModel');
const NotesView = require('./models/notesView');

const api = new NotesApi();
const notesModel = new NotesModel();
const notesView = new NotesView(notesModel, api);


notesView.displayNotesFromApi();


