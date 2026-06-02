const jwt = require("jsonwebtoken");

const user = {
  id: 1,
  email: "admin@mail.com",
  password: "123456",
  role: "admin",
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (email !== user.email || password !== user.password) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  res.json({
    token,
  });
};

module.exports = { login };
