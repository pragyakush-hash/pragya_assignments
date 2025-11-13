import express from "express";
import sellerAnalyticsController from "../controller/sellerAnalyticsController.js";

const router = express.Router();


router.get("/total-products/:sellerId",sellerAnalyticsController.getSellerTotalProducts);
router.get("/total-orders/:sellerId",sellerAnalyticsController.getSellerTotalOrders);
router.get("/total-revenue/:sellerId", sellerAnalyticsController.getSellerRevenue);

export default router;
