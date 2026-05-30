const db = require("../config/database");

const getUsers = async () => {
  return db("users");
};

const getOneUser = async (id) => {
  return db("users").where("id", id).first();
};

const createUser = async (payload) => {
  return db("users").insert(payload);
};

const deleteUser = async (id) => {
  return db("users").where("id", id).del();
};

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  deleteUser,
};
