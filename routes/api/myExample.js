const router = require("express").Router();
const myExampleController = require("../../controllers/myExampleController");

// Matches with "/api/example"
router
  .route("/")
  .get(myExampleController.findAll)
  .post(myExampleController.create);

// Matches with "/api/example/:id"
router
  .route("/:id")
  .get(myExampleController.findById)
  .put(myExampleController.update)
  .delete(myExampleController.remove);

module.exports = router;
