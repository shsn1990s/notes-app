const NotesApi = require("./notesApi");

require("jest-fetch-mock").enableMocks();

describe("NotesApi Class", () => {
  it("calls fetch and loads the returned data", async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(
      JSON.stringify(["This note is coming from the server"])
    );

    api.loadNotes((response) => {
      expect(response).toStrictEqual(["This note is coming from the server"]);
    });
  });
  it("creates a note using the createNote method", () => {

    const notesApi = new NotesApi();
    const inputMessage = "Test Message."
    const outputMessage = { "content": 'Test Message.' };
    notesApi.createNote(inputMessage)

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes', {
      method: "POST", headers: { 'content-type': "application/json" }, body: JSON.stringify(outputMessage),
    })
  });
});
