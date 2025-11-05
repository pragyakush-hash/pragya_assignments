import { Router } from "express";
import userController from "../controller/userController.js";
import verifyToken from "../middleware/authMiddleware.js";
const router = Router();

//protecetd route

router.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected route accessed" });
});

router.post("/", userController.createUser);
router.get("/", userController.getUser);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);
router.post("/register", userController.register);
router.post("/login", userController.login);

/**
 * Complete CRUD operation for user
 * Complete CRUD operation for user/:id
 */

export default router;
