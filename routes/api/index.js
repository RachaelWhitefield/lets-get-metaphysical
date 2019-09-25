const router = require("express").Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const favoritesRoutes = require("./favoritesRoutes");

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);
router.use("/favorites", favoritesRoutes)

// router.use("/gemstones", gemstoneRoutes);

module.exports = router;
