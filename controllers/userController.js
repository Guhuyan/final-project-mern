const db = require("../models");
const bcrypt = require("bcryptjs");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // dashboard: function(req, res) {
  //   res.render("dashboard");
  // }
};

// register: function(req, res) {
//   let salt = bcrypt.genSaltSync(10);
//   db.User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: bcrypt.hashSync(req.body.password, salt)
//   })
//     .then(function () {
//       return res.redirect("/login");
//     })
//     .catch(function (err) {
//       res.send(err);
//     });
// }

// login: function(req, res) {
//   db.User.findOne({ where: { email: req.body.user_email } })
//     .then(function (user) {
//       if (user && bcrypt.compareSync(req.body.pwd, user.password)) {
//         req.session.user = { id: user.id, username: user.username };
//         req.session.save(function () {
//           res.redirect("/");
//         });
//       } else {
//         res.redirect("/login");
//       }
//     })
//     .catch(function () {
//       res.send("Invalid username/password.");
//     });
// }

// logout: function(req, res) {
//   req.session.destroy(function () {
//     res.redirect("/");
//   });
// }

// exports.home = function (req, res) {
//   if (req.session.user) {
//     let query = {};
//     query.UserId = req.session.user.id;
//     db.Post.findAll({
//       where: query
//     }).then(function (dbPost) {
//       res.render("dashboard", {
//         username: req.session.user.username,
//         posts: dbPost
//       });
//     });
//   } else {
//     res.render("index");
//   }
// };
