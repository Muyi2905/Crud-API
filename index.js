const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/products.js"); // Ensure this file exists
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error creating product: " + error.message });
    console.error("Error in app.post:", error);
  }
});

mongoose
  .connect("mongodb://localhost:27017/Crud", {
    useNewUrlParser: true, // Update if using Mongoose >= 6.0.0
    useUnifiedTopology: true, // Update if using Mongoose >= 6.0.0
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Could not connect to database:", error);
  });

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
