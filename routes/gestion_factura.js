const router = require("express").Router();
const facturaController = require("../controllers/factura");

router.post("/crear-facturas", async (req, res) => {
  const { total, fecha, id_usuario } = req.body;
  const responseCreate = await facturaController.create(
    total,
    fecha,
    id_usuario
  );
  res.send(responseCreate);
});

router.get("/mostrar-facturas-usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const responseSelect = await facturaController.listPorUsuario(id);
  res.send(responseSelect);
});

module.exports = router;
