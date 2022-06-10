const ServiceResponse = require("../entities/ServiceResponse");
const userService = require("../services/user");

const { hashPassword } = require("../utils/encryption");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

const e = require("express");
const { response } = require("express");

const userController = {
  register: async (name, email, password, role) => {
    const response = await userService.obtenerUsuario(email);

    //Comprobar si el email es valido

    if (response.data) {
      response.setErrorResponse("Ya existe un usuario con este email", 400);
      return response;
    }

    //Encriptar contraseña

    const hashedPassword = await hashPassword(password);

    //INSERT user into the database

    if (role === "ADM") {
      const AdminResult = await userService.registro(
        name,
        email,
        hashedPassword,
        1
      );
      return AdminResult;
    } else {
      const ClientResult = await userService.registro(
        name,
        email,
        hashedPassword,
        2
      );
      return ClientResult;
    }
  },

  login: async (email, password) => {
    //Verificar que el usuario exista
    const responseExists = await userService.obtenerUsuario(email);

    if (!responseExists.data) {
      responseExists.setErrorResponse(
        "El email seleccionado no es válido",
        401
      );
      return responseExists;
    }

    //Verificar que el rol coincida con el administrador

    const roleResponse = await userService.obtenerRolPorEmail(email);

    console.log(role);
  },
};

module.exports = userController;
