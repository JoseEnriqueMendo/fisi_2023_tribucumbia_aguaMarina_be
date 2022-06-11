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

  registro: async (name, email, password, id_Rol) => {
    let serviceResponseRegister = new ServiceResponse();
    try {
      const { rows } = await client.query(
        'INSERT INTO "user" (name,email,password,id_profile) VALUES ($1,$2,$3,$4) RETURNING * ',
        [name, email, password, id_Rol]
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
};

module.exports = userService;
