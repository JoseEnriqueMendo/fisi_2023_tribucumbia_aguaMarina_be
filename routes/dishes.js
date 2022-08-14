const router = require("express").Router();
const dishesController = require("../controllers/dishes");

router.get("/count", async (req, res) => {
  const responseCount = await dishesController.count();
  res.send(responseCount);
});

router.get("/all", async (req, res) => {
  const responseShowData = await dishesController.list();
  res.send(responseShowData);
});

router.post("/create", async (req, res) => {
  const { name, description, image, price, idcategory } = req.body;
  const responseCreate = await dishesController.create(
    name,
    description,
    image,
    price,
    idcategory
  );
  res.send(responseCreate);
});

module.exports = router;
