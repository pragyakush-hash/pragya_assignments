import express from "express";
import sellerAnalyticsController from "../controller/sellerAnalyticsController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/all/total-products",verifyToken, sellerAnalyticsController.getSellerTotalProducts);
router.get("/total-orders/",verifyToken,sellerAnalyticsController.getSellerTotalOrders);
router.get("/total-revenue/:sellerId", sellerAnalyticsController.getSellerRevenue);

export default router;
