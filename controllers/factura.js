const ServiceResponse = require("../entities/ServiceResponse");
const facturaService = require("../services/factura");
const userService = require('../services/user');

const e = require("express");
const { response } = require("express");

const facturaController = {
  create: async (total, fecha, id_usuario) => {
    const responseCreate = await facturaService.guardarFactura(
      total,
      fecha,
      id_usuario
    );

    return responseCreate;
  },

  listPorUsuario: async (id) => {

    const idResponse = await userService.obtenerUsuarioPorId(id);
    if(idResponse.data === null){
      return idResponse
    }

    const responseData = await facturaService.listPorUsuario(id);
    if (!responseData.data) {
      responseData.setErrorResponse("No hay registros de facturas", 400);
      return responseData;
    }

    return responseData;
  },
};

module.exports = facturaController;
