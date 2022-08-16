const ServiceResponse = require("../entities/ServiceResponse");
const pedidoService = require("../services/pedido");

const e = require("express");
const { response } = require("express");


const pedidoController = {

    create: async (cantidad,subtotal,id_platillo,id_factura) => {
        const responseCreate = await pedidoService.guardarpedido(
            cantidad,
            subtotal,
            id_platillo,
            id_factura
        );

        return responseCreate;
},


}


module.exports = pedidoController;