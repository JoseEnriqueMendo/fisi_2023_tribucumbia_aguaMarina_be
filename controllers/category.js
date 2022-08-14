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
  count: async () => {
    const response = await categoryService.count();

    if (response.data.count === "0") {
      response.setSucessResponse(
        "No hay categorías en la base de datos",
        false
      );
      return response;
    }

    response.setSucessResponse("Categoría(s) encontradas", true);
    return response;
  },

  create: async (name, description, url) => {
    const responseCreate = await categoryService.create(name, description, url);

    return responseCreate;
  },

  edit: async (name, description, url, id) => {
    const responseEdit = await categoryService.edit(name, description, url, id);

    return responseEdit;
  },

  delete: async (id) => {
    const responseDelete = await categoryService.delete(id);
    return responseDelete;
  },
};

module.exports = categoryController;
