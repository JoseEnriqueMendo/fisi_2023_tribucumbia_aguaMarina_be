const { client } = require("../db/index");

const ServiceResponse = require("../entities/ServiceResponse");


const pedidoService = {
    
    guardarpedido: async (
        cantidad,
        subtotal,
        id_platillo,
        id_factura
      ) => {
        let serviceResponseRegister = new ServiceResponse();
        try {
          const { rows } = await client.query(
            'INSERT INTO "pedido" (cantidad,subtotal,id_platillo,id_factura) VALUES ($1,$2,$3,$4) RETURNING * ',
            [cantidad,subtotal,id_platillo,id_factura]
          );
          serviceResponseRegister.setSucessResponse(
            "Pedido registrado exitosamente",
            rows[0]
          );
        } catch (error) {
          serviceResponseRegister.setErrorResponse("Error en la conexión", 500);
        } finally {
          return serviceResponseRegister;
        }
      },

    

}

module.exports = pedidoService;