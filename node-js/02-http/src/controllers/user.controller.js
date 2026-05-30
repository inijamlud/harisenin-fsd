const users = require("../models/user.model");

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(user);
  res.status(201).json(user);
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  res.json(user);
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
