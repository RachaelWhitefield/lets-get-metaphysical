const router = require("express").Router();
const gemstonesController = require("../../controllers/gemstoneController");

// Matches with "/api/books"
router.route("/")
  .get(gemstonesController.findAll)
  .post(gemstonesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(gemstonesController.findById)
  .put(gemstonesController.update)
  .delete(gemstonesController.remove);

module.exports = router;