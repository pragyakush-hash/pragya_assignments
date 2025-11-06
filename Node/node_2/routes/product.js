import { Router } from "express";
import productsController from "../controller/productsController.js";

const route = Router();

route.post("/", productsController.createProduct);
route.get("/", productsController.getAllProducts);
route.get("/:id", productsController.getProductById);
route.delete("/:id", productsController.getProductAndDelete);
route.put("/:id", productsController.getProductAndUpdate);
route.patch("/:id", productsController.getProductAndUpdateField);
route.get("/api/products", productsController.getProductByPagination);

export default route;
