const express = require("express");
const Shop = require("../model/Shop");

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Shop.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send("An error occurred while fetching products");
  }
});

// GET a single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Shop.findById(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send("An error occurred while fetching the product");
  }
});

// POST a new product
router.post("/", async (req, res) => {
  try {
    const { name, price, imgUrl } = req.body;
    const product = new Shop({ name, price, imgUrl });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).send("An error occurred while adding the product");
  }
});

// PUT (update) an existing product by ID
router.put("/:id", async (req, res) => {
  try {
    const { name, price, imgUrl } = req.body;
    const product = await Shop.findByIdAndUpdate(
      req.params.id,
      { name, price, imgUrl },
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).send("An error occurred while updating the product");
  }
});

// DELETE a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const product = await Shop.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).send("Product deleted successfully");
  } catch (err) {
    res.status(500).send("An error occurred while deleting the product");
  }
});

module.exports = router;
