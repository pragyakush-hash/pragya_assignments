import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";

// 1. Seller product count
const getSellerTotalProducts = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const totalProducts = await Product.countDocuments({ seller: sellerId });
    res.json({ totalProducts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSellerTotalOrders = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const orders = await Order.find({ "products.seller": sellerId });
    res.json({ totalOrders: orders.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSellerRevenue = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const orders = await Order.find({ "products.seller": sellerId });

    let totalRevenue = 0;
    for (const order of orders) {
      totalRevenue += order.totalAmount;
    }

    res.json({ totalRevenue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getSellerTotalProducts,
  getSellerTotalOrders,
  getSellerRevenue,
};
