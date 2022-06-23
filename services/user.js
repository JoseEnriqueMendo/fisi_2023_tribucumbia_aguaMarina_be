const { client } = require("../db/index");

const ServiceResponse = require("../entities/ServiceResponse");

const userService = {
  obtenerUsuario: async (email) => {
    let serviceResponseVerify = new ServiceResponse();

    try {
      const { rows } = await client.query(
        'SELECT * FROM "user"  WHERE email=$1',
        [email]
      );

      serviceResponseVerify.setSucessResponse("Usuario encontrado", rows[0]);
    } catch (error) {
      serviceResponseVerify.setErrorResponse("Error en la conexión", 500);
    } finally {
      return serviceResponseVerify;
    }
  },

  registro: async (
    name,
    lastname,
    gender,
    email,
    dni,
    phone,
    password,
    id_Rol
  ) => {
    let serviceResponseRegister = new ServiceResponse();
    try {
      const { rows } = await client.query(
        'INSERT INTO "user" (name,lastname,gender,email,dni,phone_number,password,id_profile) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * ',
        [name, lastname, gender, email, dni, phone, password, id_Rol]
      );
      serviceResponseRegister.setSucessResponse(
        "Usuario registrado exitosamente",
        rows[0]
      );
    } catch (error) {
      serviceResponseRegister.setErrorResponse("Error en la conexión", 500);
    } finally {
      return serviceResponseRegister;
    }
  },

  obtenerRolPorEmail: async (email) => {
    let serviceResponseRole = new ServiceResponse();
    try {
      const { rows } = await client.query(
        'select profile.code from profile inner join "user" on profile.id="user".id_profile where "user".email=$1',
        [email]
      );
      serviceResponseRole.setSucessResponse("Rol encontrado", rows[0]);
    } catch (error) {
      serviceResponseRole.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseRole;
    }
  },

  obtenerUsuarioPorId: async (idUser) => {
    let serviceResponseUser = new ServiceResponse();
    try {
      const { rows } = await client.query('SELECT * FROM "user" WHERE id=$1', [
        idUser,
      ]);
      serviceResponseUser.setSucessResponse("Usuario encontrado", rows[0]);
    } catch (error) {
      serviceResponseUser.setErrorResponse(error.message, 500);
    } finally {
      return serviceResponseUser;
    }
  },
};

module.exports = userService;
