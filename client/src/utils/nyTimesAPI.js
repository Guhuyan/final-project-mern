import axios from "axios";
require("dotenv");

const BASEURL = "/api/nyt?q=";

// Export an object containing methods we'll use for accessing the API
export default {
  getArticle: function(query) {
    return axios.get(BASEURL + query);
  }
};
