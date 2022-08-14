const router = require("express").Router();
const dishesController = require("../controllers/dishes");

router.get("/count", async (req, res) => {
  const responseCount = await dishesController.count();
  res.send(responseCount);
});

module.exports = router;
