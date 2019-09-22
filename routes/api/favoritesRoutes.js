const router = require("express").Router();

const favoritesController = require("../../controller/favoritesController");


router
    .route("/")
    .get(favoritesController.findAll)
    .post(favoritesController.create);

router
    .route("/:id")
    .delete(favoritesController.remove);
    
module.exports = router;