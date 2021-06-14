const onLogin = async (req, res, next) => {
  // Do Your Sign In Stuff Here

  res.status(200).send({
    status: "success",
    payload: {
      user: { name: "X", email: "y@gmail.com" },
      token: "your jwt token goes here",
    },
  });
};

const register = async (req, res) => {
  try {
    // Do REgistration..
  } catch (error) {}
};

module.exports = {
  onLogin,
  register,
};
