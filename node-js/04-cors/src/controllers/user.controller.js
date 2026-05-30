const db = require("../config/database");
const users = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const data = await users.getUsers();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    await users.createUser(req.body);

    res.status(201).json({
      message: "User created",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
