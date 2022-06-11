const router = require("express").Router();
const pool = require("../db");
const userController = require("../controllers/user");
const authorize = require("../middleware/User/authorize");
const validInfo = require("../middleware/User/validInfo");

router.post("/register", validInfo, async (req, res) => {
  const { name, email, password, role } = req.body;

  const registerResponse = await userController.register(
    name,
    email,
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

module.exports = router;
