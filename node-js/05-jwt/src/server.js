require("dotenv").config();

const cors = require("cors");
const express = require("express");
const userRouter = require("./routes/user.route");
const loggerMiddleware = require("./middlewares/logger.middleware");
const authRoutes = require("./routes/auth.route");
const authMiddleware = require("./middlewares/auth.middleware");

const app = express();

app.use(cors());
app.use(loggerMiddleware);
app.use(express.json());

app.use("/users", authMiddleware.authCheck, userRouter);
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running");
});
