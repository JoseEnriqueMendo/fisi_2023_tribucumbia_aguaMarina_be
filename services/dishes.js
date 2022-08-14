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
      const { rows } = await client.query('SELECT * FROM "platillos"');
      serviceResponseList.setSucessResponse("Platillos encontradas", rows);
      console.log(rows);
    } catch (error) {
      serviceResponseList.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseList;
    }
  },
};

module.exports = dishesService;
