import express from "express";
import adminAnalyticsController from "../controller/adminAnalyticsController.js";

const router = express.Router();

// Admin Routes
router.get("/total-users", adminAnalyticsController.getTotalUsers);
router.get("/total-orders", adminAnalyticsController.getTotalOrders);
router.get("/total-revenue", adminAnalyticsController.getTotalRevenue);

export default router;
