// dummy data
let users = [
  { id: 1, name: "Andi" },
  { id: 2, name: "Budi" },
];

const pool = require("../database/db.js");

// GET all users
exports.getProducts = async (req, res) => {
  // res.json({
  //   status: "success",
  //   data: users,
  // });
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// GET user by ID
exports.getUserById = (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.json({
    status: "success",
    data: user,
  });
};

// POST create user
exports.createUser = (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  users.push(newUser);

  res.status(201).json({
    status: "success",
    message: "User created",
    data: newUser,
  });
};

// PUT update user
exports.updateUser = (req, res) => {
  const index = users.findIndex((u) => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  users[index].name = req.body.name;

  res.json({
    status: "success",
    message: "User updated",
    data: users[index],
  });
};

// DELETE user
exports.deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  const removed = users.splice(index, 1);

  res.json({
    status: "success",
    message: "User deleted",
    data: removed[0],
  });
};
