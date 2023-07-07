const router = require("express").Router();
const authRouter = require("./gestion_usuarios");
const categoryRouter = require("./gestion_categorias");
const dishesRouter = require("./gestion_platillos.js");
const facturaRouter = require("./gestion_factura.js");
const pedidoRouter = require("./gestion_pedidos")

// ? Clientes
router.use("/ux-gestion-usuarios/da/servicio-al-cliente/v1/", authRouter);
// router.use("/auth/", authRouter);

// ? Platillas
router.use("/dishes", dishesRouter);

// ? Categorias
router.use("/category", categoryRouter);

// ? Pedidos
router.use("/pedido", pedidoRouter);

// ? Facturas
router.use("/factura", facturaRouter);
module.exports = router;
