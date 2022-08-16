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

router.post("/edit", async (req, res) => {
  const { name, description, image, price, idcategory, idoffer, id } = req.body;
  const responseEdit = await dishesController.edit(
    name,
    description,
    image,
    price,
    idcategory,
    idoffer,
    id
  );
  res.send(responseEdit);
});

router.post("/delete", async (req, res) => {
  const { id } = req.body;
  const responseDelete = await dishesController.delete(id);
  res.send(responseDelete);
});

module.exports = router;
