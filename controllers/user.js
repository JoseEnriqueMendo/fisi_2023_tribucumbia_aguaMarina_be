const ServiceResponse = require("../entities/ServiceResponse");
const userService = require("../services/user");
/*
const { hashPassword } = require("../utils/encryption");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
*/
const e = require("express");

const userController = {
  register: async (name, email, password, id_Rol) => {
    const response = await userService.obtenerUsuario(email);

    if (!response.data) {
      const registerResponse = await userService.registro(
        name,
        email,
        password,
        id_Rol
      );

      return registerResponse;
    } else {
      response.setErrorResponse("Ya existe un usuario con este email", 400);
      return response;
    }
  },
};

module.exports = userController;
