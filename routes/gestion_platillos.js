const router = require("express").Router();
const dishesController = require("../controllers/dishes");

router.post("/crear-platillos", async (req, res) => {
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

router.get("/contar-platillos", async (req, res) => {
  const responseCount = await dishesController.count();
  res.send(responseCount);
});

router.get("/mostrar-platillos", async (req, res) => {
  const responseShowData = await dishesController.list();
  res.send(responseShowData);
});

router.get("/mostrar-detalle-platillos/:id", async (req, res) => {
  const {id} = req.params;
  const responseShowData = await dishesController.list_id(id);
  res.send(responseShowData);
});


router.put("/editar-platillos/:id", async (req, res) => {
  const {id} = req.params;
  const { name, description, image, price, idcategory } = req.body;
  const responseEdit = await dishesController.edit(
    name,
    description,
    image,
    price,
    idcategory,
    id
  );
  res.send(responseEdit);
});

router.delete("/eliminar-platillos/:id", async (req, res) => {
  const { id } = req.params;
  const responseDelete = await dishesController.delete(id);
  res.send(responseDelete);
});

router.get("/listar-platillos/:num", async (req, res) => {
  const { num } = req.params;
  const response = await dishesController.listPorCantidad(num);
  res.send(response);
});

// router.post("/selectDishes", async (req, res) => {
//   const { name } = req.body;
//   const responseSelect = await dishesController.selectDishes(name);
//   res.send(responseSelect);
// });

module.exports = router;
