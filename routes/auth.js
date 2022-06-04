const router = require("express").Router();
const pool = require("../db");
const userController = require("../controllers/user");

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  const obtenerUsuario = await userController.register(
    name,
    email,
    password,
    role
  );

  res.send(obtenerUsuario);
});

module.exports = router;
