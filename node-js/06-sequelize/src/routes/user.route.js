const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const { authorize } = require("../middlewares/auth.middleware");
const userRouter = express.Router();

userRouter.get("/", authorize("admin"), getUsers);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
