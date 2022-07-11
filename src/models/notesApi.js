class NotesApi {

  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
  // Working Methods Using Promises:
  // createNote(note) {
  //   const data = { "content": note };
  //   fetch('http://localhost:3000/notes', {
  //     method: 'POST',
  //     headers: { 'content-type': "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //   .catch(err => console.log(err));
  // }

  // Working method using Async/Await
  async createNote(note) {
    try{
    const data = { "content": note };
    await fetch('http://localhost:3000/notes', {
      method: 'POST', 
      headers: { 'content-type': "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
  }
}

module.exports = NotesApi;
