import User from "../models/userModel.js";
import Order from "../models/orderModel.js";

// 1. Count total users
const getTotalUsers = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    res.json({ totalUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTotalOrders = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    res.json({ totalOrders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTotalRevenue = async (req, res) => {
  try {
    const orders = await Order.find();
    let totalRevenue = 0;

    for (const order of orders) {
      totalRevenue += order.totalAmount;
    }

    res.json({ totalRevenue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default { getTotalUsers, getTotalOrders, getTotalRevenue };
