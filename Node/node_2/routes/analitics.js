import { Router } from "express";
import analiticsController from "../controller/analiticsController.js";
import checkRole from "../middleware/roleMiddleware.js";

const route = Router();

route.get("/", analiticsController.userOrderDetails);

export default route;
