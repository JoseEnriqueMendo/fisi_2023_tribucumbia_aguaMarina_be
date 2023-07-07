const router = require("express").Router();
const authRouter = require("./gestion_usuarios");
const categoryRouter = require("./gestion_categorias");
const dishesRouter = require("./gestion_platillos");
const facturaRouter = require("./gestion_historicos");
const pedidoRouter = require("./gestion_pedidos")

// ? Clientes
router.use("/ux-gestion-usuarios/da/servicio-al-cliente/v1/", authRouter);
// router.use("/auth/", authRouter);

// ? Platillas
router.use("/ux-gestion-platillos/da/servicio-al-cliente/v1/", dishesRouter);

// ? Categorias
router.use("/ux-gestion-categorias/da/servicio-al-cliente/v1/", categoryRouter);

// ? Historicos
router.use("/ux-gestion-historicos/da/servicio-al-cliente/v1/", facturaRouter);

// ? Pedidos
router.use("/ux-gestion-pedidos/da/servicio-al-cliente/v1/", pedidoRouter);


module.exports = router;
