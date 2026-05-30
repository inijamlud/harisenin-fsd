require("dotenv").config();

const cors = require("cors");
const express = require("express");
const userRoute = require("./routes/user.route");
const loggerMiddleware = require("./middlewares/logger.middleware");

const app = express();

app.use(cors());
app.use(loggerMiddleware);
app.use(express.json());

app.use("/users", userRoute);

app.listen(3000, () => {
  console.log("Server running");
});
