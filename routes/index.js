const router = require("express").Router();
const authRouter = require("./auth");
const categoryRouter = require("./category");

router.use("/auth", authRouter);
router.use("/category", categoryRouter);

module.exports = router;
