const router = require("express").Router();
const authRouter = require("./gestion_usuarios");
const categoryRouter = require("./gestion_categorias");
const dishesRouter = require("./gestion_platillos");
const facturaRouter = require("./gestion_historicos");
const pedidoRouter = require("./gestion_pedidos")
const pagosRouter = require("./gestion_pagos")

// ? Clientes
router.use("/ne-gestion-usuarios/servicio-al-cliente/v1/", authRouter);
// router.use("/auth/", authRouter);

// ? Platillas
router.use("/ne-gestion-platillos/servicio-al-cliente/v1/", dishesRouter);

// ? Categorias
router.use("/ne-gestion-categorias/servicio-al-cliente/v1/", categoryRouter);

// ? Historicos
router.use("/ne-gestion-historicos/servicio-al-cliente/v1/", facturaRouter);

// ? Pedidos
router.use("/ne-gestion-pedidos/servicio-al-cliente/v1/", pedidoRouter);
//pagos
router.use("/ne-gestion-pagos/servicio-al-cliente/v1/", pagosRouter);


module.exports = router;
