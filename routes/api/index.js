// routes.api.index.js

const router = require("express").Router();
const userRoutes = require("./users");
const externalRoutes = require("./external");

router.use("/external", externalRoutes);
router.use("/users", userRoutes);

module.exports = router;
