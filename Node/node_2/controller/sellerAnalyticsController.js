import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";

// 1. Seller product count
// const getSellerTotalProducts = async (req, res) => {
//   try {
//     const userId  = req.userId;
//     console.log(userId,"userid of seller")

//     const totalProducts = await Product.countDocuments({ seller: userId, });
//     console.log(totalProducts,"totalproducts of seller")
//     res.json({ totalProducts });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const getSellerTotalProducts = async (req, res) => {
  try {
    const userId = req.userId;

    console.log(userId, "Seller UserId");

    const products = await Product.find({ seller: userId })
      .populate("seller")
      .sort({ createdAt: -1 });

    const totalProducts = products.length;

    console.log(totalProducts, "Total Products");

    res.json({
      success: true,
      totalProducts,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getSellerTotalOrders = async (req, res) => {
  try {
    const { userId } = req.userId;
    const orders = await Order.find({ "products.seller": userId })
      .populate("products")
      .sort({ createdAt: -1 });
    res.json({ totalOrders: orders.length ,orders});
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
