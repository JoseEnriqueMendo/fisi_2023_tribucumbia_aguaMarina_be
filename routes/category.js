const router = require("express").Router();
const pool = require("../db");
const categoryController = require("../controllers/category");

router.get("/all", async (req, res) => {
  const responseShowData = await categoryController.list();
  res.send(responseShowData);
});

router.get("/count",async (req,res) => {
  const responseCount = await categoryController.count();
  res.send(responseCount);
})

module.exports = router;
