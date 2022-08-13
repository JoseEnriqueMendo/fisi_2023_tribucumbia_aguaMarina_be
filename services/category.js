const { client } = require("../db/index");

const ServiceResponse = require("../entities/ServiceResponse");

const categoryService = {
  list: async () => {
    let serviceResponseList = new ServiceResponse();
    try {
      const { rows } = await client.query('SELECT * FROM "category"');
      serviceResponseList.setSucessResponse("Categorias encontradas", rows);
      console.log(rows);
    } catch (error) {
      serviceResponseList.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseList;
    }
  },

  count: async () => {
    let serviceResponseCount = new ServiceResponse();
    try {
      const { rows } = await client.query("SELECT count(id) FROM category");
      serviceResponseCount.setSucessResponse("Counted rows ", rows[0]);
    } catch (error) {
      serviceResponseCount.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseCount;
    }
  },

  create: async (name, description, url) => {
    let serviceResponseCreate = new ServiceResponse();
    try {
      const { rows } = await client.query(
        "INSERT INTO category (name,description,image_url) values ($1,$2,$3) RETURNING *",
        [name, description, url]
      );
      serviceResponseCreate.setSucessResponse(
        "Categoría creada exitosamente",
        rows[0]
      );
    } catch (error) {
      serviceResponseCreate.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseCreate;
    }
  },
};

module.exports = categoryService;
