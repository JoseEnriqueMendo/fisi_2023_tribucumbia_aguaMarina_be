const router = require("express").Router();
const pedidoController = require("../controllers/pedido");

router.get("/mostrar-pedidos-usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const responseSelect = await pedidoController.listPorUsuario(id);
  res.send(responseSelect);
});

router.get("/mostrar-facturas-usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const responseSelect = await facturaController.listPorUsuario(id);
  res.send(responseSelect);
});


module.exports = router;