const db = require("../config/database");
const User = require("../models/user-sequelize.model");
const users = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
    });

    res.status(201).json({
      message: "User created",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await users.getOneUser(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await users.updateUser(id, req.body);
    const updatedUser = await users.getOneUser(id);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await users.getOneUser(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await users.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
