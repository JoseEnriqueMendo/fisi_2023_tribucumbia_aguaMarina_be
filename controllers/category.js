const categoryService = require("../services/category");
const ServiceResponse = require("../entities/serviceResponse");

const categoryController = {
  list: async () => {
    const responseData = await categoryService.list();
    if (!responseData.data) {
      responseData.setErrorResponse("No hay registros de categorías", 400);
      return responseData;
    }

    return responseData;
  },
};

module.exports = categoryController;
