const { client } = require("../db/index");

const ServiceResponse = require("../entities/ServiceResponse");

const facturaService = {
  guardarFactura: async (total, fecha, id_usuario) => {
    let serviceResponseRegister = new ServiceResponse();
    try {
      const { rows } = await client.query(
        'INSERT INTO "factura" (total,fecha,id_usuario) VALUES ($1,$2,$3) RETURNING * ',
        [total, fecha, id_usuario]
      );
      serviceResponseRegister.setSucessResponse(
        "Factura registrado exitosamente",
        rows[0]
      );
    } catch (error) {
      serviceResponseRegister.setErrorResponse("Error en la conexión", 500);
    } finally {
      return serviceResponseRegister;
    }
  },

  listPorUsuario: async (id) => {
    let serviceResponseList = new ServiceResponse();
    try {
      const { rows } = await client.query(
        // "SELECT p2.nombre, p2.precio ,p.cantidad , p.subtotal ,f.fecha FROM pedido as p , platillo p2, factura f   WHERE id_factura  in (select id from factura where id_usuario =" +
        //   id +
        //   " ) and p.id_platillo =p2.id and p.id_factura =f.id "
        "SELECT * FROM factura WHERE id_usuario = $1", [id]
      );
      serviceResponseList.setSucessResponse("Facturas encontradas", rows);
      console.log(rows);
    } catch (error) {
      serviceResponseList.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseList;
    }
  },
};

module.exports = facturaService;
