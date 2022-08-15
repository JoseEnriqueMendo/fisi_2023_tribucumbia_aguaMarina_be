const { client } = require("../db/index");

const ServiceResponse = require("../entities/ServiceResponse");

const dishesService = {
  count: async () => {
    let serviceResponseCount = new ServiceResponse();
    try {
      const { rows } = await client.query("SELECT count(id) FROM platillo");
      serviceResponseCount.setSucessResponse("Counted rows ", rows[0]);
    } catch (error) {
      serviceResponseCount.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseCount;
    }
  },

  list: async () => {
    let serviceResponseList = new ServiceResponse();
    try {
      const { rows } = await client.query('SELECT * FROM "platillo"');
      serviceResponseList.setSucessResponse("Platillos encontradas", rows);
      console.log(rows);
    } catch (error) {
      serviceResponseList.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseList;
    }
  },

  create: async (name, description, image, price, idcategory) => {
    let serviceResponseCreate = new ServiceResponse();
    try {
      const { rows } = await client.query(
        "INSERT INTO platillo (nombre,descripcion,imagen,precio,id_categoria) values ($1,$2,$3,$4,$5) RETURNING *",
        [name, description, image, price, idcategory]
      );
      serviceResponseCreate.setSucessResponse(
        "Platillo creado exitosamente",
        rows[0]
      );
    } catch (error) {
      serviceResponseCreate.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseCreate;
    }
  },
};

module.exports = dishesService;
