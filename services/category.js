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
};

module.exports = categoryService;
