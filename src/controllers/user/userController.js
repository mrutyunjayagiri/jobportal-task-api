const createUser = async (req, res) => {
  // Create A User and Insert Into Db

  res.status(201).send({
    status: "created",
    payload: {
      user: req.body,
    },
  });
};

module.exports = {
  createUser,
};
