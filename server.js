require("dotenv").config();
const express = require("express");
// const expressSession = require("express-session");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

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
app.use(routes);
// app.get("/api/nyt", function(req, res) {
//   let q = req.query.q;
//   res.json({ username: q });
// });

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Start the API server
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
