const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

// middleware parsing JSON
app.use(express.json());

// routing untuk user
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// running server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
