import Order from "../models/orderModel.js";

const userOrderDetails = async (req, res) => {
  try {
    const users = await Order.find({}).populate("user", "name email role");
    console.log(users, "users");
    const userAnalitics = [];

    for (const user of users) {
      const userOrder = await Order.find({ user: user?.user?._id });
      let orderCount = userOrder.length;
      let totalAmount = 0;
      for (const order of userOrder) {
        totalAmount += order.totalAmount;
        console.log(totalAmount, "totalamount");
      }
      userAnalitics.push({
        _id: user.user?._id,
        name: user.user?.name,
        email: user.user?.email,
        role: user.user?.role,
        orderCount: orderCount,
        totalAmount: totalAmount,
      });
    }
    console.log("userAnalitics", userAnalitics);
    res.status(200).json(userAnalitics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sellerByProduct = async (req, res) => {
  try {
    const sellerId = req.userId;



  } catch (error) {

  }
};
export default { userOrderDetails, sellerByProduct };
