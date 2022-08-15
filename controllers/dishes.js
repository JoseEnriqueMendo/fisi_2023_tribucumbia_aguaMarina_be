const ServiceResponse = require("../entities/ServiceResponse");
const dishesService = require("../services/dishes");

const e = require("express");
const { response } = require("express");

const dishesController = {
  count: async () => {
    const response = await dishesService.count();

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

  list: async () => {
    const responseData = await dishesService.list();
    if (!responseData.data) {
      responseData.setErrorResponse("No hay registros de categorías", 400);
      return responseData;
    }

    return responseData;
  },

  create: async (name, description, image, price, idcategory) => {
    const responseCreate = await dishesService.create(
      name,
      description,
      image,
      price,
      idcategory
    );

    return responseCreate;
  },
};

module.exports = dishesController;
