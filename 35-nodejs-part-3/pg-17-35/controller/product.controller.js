const products = [
  { id: 1, name: "Coca cola", price: 5000 },
  { id: 2, name: "Pucuk Harum", price: 4000 },
];

exports.getProducts = (req, res) => {
  res.json({
    status: "success",
    data: products,
  });
};

exports.getProductById = (req, res) => {
  const product = products.find((u) => u.id == req.params.id);

  if (!product) {
    return res.status(404).json({
      status: "error",
      message: "Product not found",
    });
  }

  res.json({
    status: "success",
    data: product,
  });
};
