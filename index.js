const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/products.js"); // Ensure this file exists
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error getting product: " + error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error getting product: " + error.message });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!product) {
      return res.status(400).json(error);
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
    console.error("error updating product");
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product: " + error.message });
    console.error("Error deleting product:", error);
  }
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
