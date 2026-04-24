// dummy data
let users = [
  {
    id: 1,
    name: "Andi Hani",
    email: "andi.hani@example.com",
    role: "admin",
    status: "active",
    createdAt: "2025-01-01",
  },
  {
    id: 2,
    name: "Budiarto Dalton",
    email: "budiarto.dalton@example.com",
    role: "user",
    status: "active",
    createdAt: "2025-01-02",
  },
  {
    id: 3,
    name: "Citra Ayu",
    email: "citra.ayu@example.com",
    role: "user",
    status: "inactive",
    createdAt: "2025-01-03",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    email: "dewi.lestari@example.com",
    role: "moderator",
    status: "active",
    createdAt: "2025-01-04",
  },
  {
    id: 5,
    name: "Eko Pratama",
    email: "eko.pratama@example.com",
    role: "user",
    status: "active",
    createdAt: "2025-01-05",
  },
  {
    id: 6,
    name: "Farhan Maulana",
    email: "farhan.maulana@example.com",
    role: "user",
    status: "banned",
    createdAt: "2025-01-06",
  },
  {
    id: 7,
    name: "Gita Mandasari",
    email: "gita.mandasari@example.com",
    role: "admin",
    status: "active",
    createdAt: "2025-01-07",
  },
  {
    id: 8,
    name: "Hendra Wijaya",
    email: "hendra.wijaya@example.com",
    role: "user",
    status: "active",
    createdAt: "2025-01-08",
  },
  {
    id: 9,
    name: "Intan Permata",
    email: "intan.permata@example.com",
    role: "user",
    status: "pending",
    createdAt: "2025-01-09",
  },
  {
    id: 10,
    name: "Joko Susanto",
    email: "joko.susanto@example.com",
    role: "moderator",
    status: "active",
    createdAt: "2025-01-10",
  },
];

// GET all users
exports.getProducts = async (req, res) => {
  res.json({
    status: "success",
    data: users,
  });
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
