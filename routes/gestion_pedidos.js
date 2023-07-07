const router = require("express").Router();
const pedidoController = require("../controllers/pedido");



router.post("/crear-pedidos", async (req, res) => {
    const { cantidad,subtotal,id_platillo,id_factura} = req.body;
    const responseCreate = await pedidoController.create(
        cantidad,
        subtotal,
        id_platillo,
        id_factura
    );
    res.send(responseCreate);
  });

  router.post("/crear-facturas", async (req, res) => {
    const { total, fecha, id_usuario } = req.body;
    const responseCreate = await facturaController.create(
      total,
      fecha,
      id_usuario
    );
    res.send(responseCreate);
  });





  module.exports = router;
