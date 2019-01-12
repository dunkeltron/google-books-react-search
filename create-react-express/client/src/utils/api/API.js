import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  searchBooks: function(query) {
    return axios.get("/api/google/books", { params: { q: query } });
  },
  getSavedBooks: function() {
    return axios.getSavedBooks("/api/books");
  },
  deleteBook:function(id){

  },
  saveBook: function() {

  }

};
