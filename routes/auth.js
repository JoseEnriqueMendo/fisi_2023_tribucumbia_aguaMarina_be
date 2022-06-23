const router = require("express").Router();
const pool = require("../db");
const userController = require("../controllers/user");
const authorize = require("../middleware/User/authorize");
const validInfo = require("../middleware/User/validInfo");

router.post("/register", async (req, res) => {
  const { name, lastname, gender, email, dni, phone, password, role } =
    req.body;

  const registerResponse = await userController.register(
    name,
    lastname,
    gender,
    email,
    dni,
    phone,
    password,
    role
  );

  res.send(registerResponse);
});

router.post("/login", validInfo, async (req, res) => {
  const { email, password } = req.body;

  const loginResponse = await userController.login(email, password);

  res.send(loginResponse);
});

router.get("/verify", authorize, (req, res) => {
  res.json(true);
});

router.get("/getName", authorize, async (req, res) => {
  const response = await userController.showName(req.user);
  res.send(response);
});

module.exports = router;
