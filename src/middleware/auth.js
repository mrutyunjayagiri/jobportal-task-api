const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    res.status(400).send({
      status: "unauthorized",
      message: "Authorization header missing!!!",
    });

    return;
  }
  const token = authHeader.replace("Bearer ", "");
  console.log("Your token: ", token);
  next();
};

module.exports = auth;
