const express = require("express");
const app = express();
const userRoutes = require("./routes/user");

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/users", userRoutes);

app.listen(3000, () => console.log("Server ready"));
