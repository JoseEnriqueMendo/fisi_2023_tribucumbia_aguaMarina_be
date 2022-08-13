const router = require("express").Router();
const pool = require("../db");
const categoryController = require("../controllers/category");

router.get("/all", async (req, res) => {
  const responseShowData = await categoryController.list();
  res.send(responseShowData);
});

router.get("/count", async (req, res) => {
  const responseCount = await categoryController.count();
  res.send(responseCount);
});

router.post("/create", async (req, res) => {
  const { name, description, url } = req.body;
  const responseCreate = await categoryController.create(
    name,
    description,
    url
  );
  res.send(responseCreate);
});

module.exports = router;
