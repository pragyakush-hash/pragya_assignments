import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

const createOrder = async (req, res) => {
  try {
    // const { products, totalAmount } = req.body;
    // console.log(products,"productsss in order")
    // console.log(totalAmount,"totalAmount in order")
    const userId = req.userId;
    console.log(userId, "userid in order");

    const newOrder = await Order.create({
      ...req.body,
      user: userId,
    });

    console.log(newOrder, "neworderr");
    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const role = req.userRole;
    const userId = req.userId;
    console.log("getallorder", role);
    console.log("getallorder", userId);
    let orders;
    if (role === "admin") {
      const orders = await Order.find().populate("user", "name email");
    } else if (role === "seller") {
      const sellerProducts = await Product.find({ seller: userId }).select(
        "_id"
      );
      const productIds = sellerProducts.map((p) => p._id);
      orders = await Order.find({
        "products.product": { $in: productIds },
      }).populate("user", "name email");
    } else {
      return res.status(403).json({
        message: "Access denied. Only sellers or admin can view orders.",
      });
    }

    res
      .status(200)
      .json({
        message: "Orders fetched successfully",
        totalOrders: orders.length,
        orders,
      });
  } catch (error) {
    console.error("errors fetching", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default { createOrder, getAllOrders };
