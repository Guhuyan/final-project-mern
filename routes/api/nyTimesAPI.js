import { get } from "http";

require("dotenv");

// Export an object containing methods we'll use for accessing the API
export default {
  getArticle: function(article) {
    return $.ajax({
      type: get,
      url:
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        article +
        "&page=1&sort=newest&api-key=" +
        process.env.NYTIMES_API_KEY,
      secret: process.env.NYTIMES_API_SECRET
    });
  }
};
