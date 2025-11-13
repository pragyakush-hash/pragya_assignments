import express from "express";
import userAnalyticsController from "../controller/userAnalyticsController.js";

const router = express.Router();

// User Routes
router.get("/order-history/:userId",userAnalyticsController.getUserOrderHistory);
router.get("/total-spent/:userId",userAnalyticsController.getUserTotalSpent);

export default router;
