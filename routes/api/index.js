const router = require("express").Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const gemstoneRoutes = require("./gemstones");

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);

// router.use("/gemstones", gemstoneRoutes);

module.exports = router;
