const router = require("express").Router();
const pool = require("../db");
const categoryController = require("../controllers/category");

router.post("/create", async (req, res) => {
  const { name, description, url } = req.body;
  const responseCreate = await categoryController.create(
    name,
    description,
    url
  );
  res.send(responseCreate);
});

router.get("/contar-categorias", async (req, res) => {
  const responseCount = await categoryController.count();
  res.send(responseCount);
});

router.get("/mostrar-categorias", async (req, res) => {
  const responseShowData = await categoryController.list();
  res.send(responseShowData);
});


router.get("/mostrar-detalles-categorias/:id", async (req, res) => {
  const {id} = req.params;
  const response = await categoryController.getName(id);
  res.send(response);
});


router.put("/editar-categorias/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, url } = req.body;
  const responseEdit = await categoryController.edit(
    name,
    description,
    url,
    id
  );
  res.send(responseEdit);
});


router.delete("/eliminar-categorias/:id", async (req, res) => {
  const { id } = req.params;
  const responseDelete = await categoryController.delete(id);
  res.send(responseDelete);
});

// router.post("/getname", async (req, res) => {
//   const { id } = req.body;
//   const response = await categoryController.getName(id);
//   res.send(response);
// });

router.get("/listar-categorias/:num", async (req, res) => {
  const { num } = req.params;
  const response = await categoryController.listPorCantidad(num);
  res.send(response);
});

module.exports = router;
