const router = require("express").Router();
const authRouter = require("./auth");
const categoryRouter = require("./category");
const dishesRouter = require("./dishes.js");

router.use("/auth", authRouter);
router.use("/category", categoryRouter);
router.use("/dishes", dishesRouter);

module.exports = router;
