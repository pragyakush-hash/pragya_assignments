import Order from "../models/orderModel.js";

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
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};

export default { createOrder, getAllOrders };
