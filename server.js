require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");
const users = require("./routes/api/users");
const app = express();
const db = require("./config/keys").mongoURI;

// Bodyparser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Passport middleware
app.use(passport.initialize()); // Passport config
require("./config/passport")(passport); // Routes
app.use("/api/users", users);

// Add routes, both API and view
app.use(routes);

const port = process.env.PORT || 3001;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// if (process.env.NODE_ENV === "production") {
//   app.use("/static", express.static(path.join(__dirname, "client/build"))); // Handle React routing, return all requests to React app
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//   });
// }

// Handle React routing, return all requests to React app
app.use("/static", express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the API server
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
