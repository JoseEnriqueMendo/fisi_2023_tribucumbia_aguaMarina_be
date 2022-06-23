const router = require("express").Router();
const pool = require("../db");
const categoryController = require("../controllers/category");

router.get("/all", async (req, res) => {
  const responseShowData = await categoryController.list();
  res.send(responseShowData);
});

module.exports = router;
