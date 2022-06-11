module.exports = function (req, res, next) {
  const { email, name, role, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === "/register") {
    console.log(!email.length);
    if (![email, name, role, password].every(Boolean)) {
      return res.status(401).send({ message: "Missing Credentials" });
    } else if (!validEmail(email)) {
      return res.status(401).send({ message: "Invalid Email" });
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).send({ message: "Missing Credentials" });
    } else if (!validEmail(email)) {
      return res.status(401).send({ message: "Invalid Email" });
    }
  }

  next();
};
