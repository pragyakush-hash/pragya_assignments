import Product from "../models/productModel.js";

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(req.params.id);
    console.log("productbyid", product);
    if (!product) return res.status(404).json({ message: "product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductAndDelete = async (req, res) => {
  try {
    const productDelete = await Product.findByIdAndDelete(req.params.id);
    if (!productDelete) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "Product is deleted sucessfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductAndUpdate = async (req, res) => {
  try {
    const productUpdate = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productUpdate) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "Product is update sucessfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProductAndUpdateField = async (req, res) => {
  try {
    const productFieldUpdate = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!productFieldUpdate) {
      return res.status(404).json({ message: "product is not found" });
    }
    res.status(200).json({ message: "product field is update successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getProductByPagination = async (req, res) => {
  console.log("come in pagination");
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;
    const products = await Product.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      products,
      currentPage: page,
      totalPages,
      totalProducts,
    });
  } catch (error) {
    console.log("error pagination", error);
    res.status(500).json({ message: "Server Error" });
  }
};
export default {
  createProduct,
  getAllProducts,
  getProductById,
  getProductAndDelete,
  getProductAndUpdate,
  getProductAndUpdateField,
  getProductByPagination,
};
