const router = require("express").Router();

const favoriteController = require("../../controller/favoriteController");

router
    .route("/")
    .get(favoriteController.findAll)
    .post(favoriteController.create);

router
    .route("/:id")
    .delete(favoriteController.remove);
    
module.exports = router;