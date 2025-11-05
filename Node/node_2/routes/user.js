import { Router } from "express";
import userController from "../controller/userController.js";
const router = Router();

router.post("/", userController.createUser);
router.get("/", userController.getUser);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);

/**
 * Complete CRUD operation for user
 * Complete CRUD operation for user/:id
 */

export default router;
