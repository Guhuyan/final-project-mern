import axios from "axios";

export default {
  // Gets all examples
  getBooks: function() {
    return axios.get("/api/example");
  },
  // Gets the example with the given id
  getBook: function(id) {
    return axios.get("/api/example/" + id);
  },
  // Deletes the example with the given id
  deleteBook: function(id) {
    return axios.delete("/api/example/" + id);
  },
  // Saves an example to the database
  saveBook: function(exampleData) {
    return axios.post("/api/example", exampleData);
  }
};
