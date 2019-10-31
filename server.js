require("dotenv").config();
const express = require("express");
// const expressSession = require("express-session");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up session
// app.use(
//   session({
//     secret: process.env.EXPRESS_SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }
//   })
// );

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
app.get("/api/nyt", function(req, res) {
  let q = req.query.q;
  res.json({ username: q });
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernproject");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
