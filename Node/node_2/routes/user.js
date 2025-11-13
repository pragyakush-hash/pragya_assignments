import { Router } from "express";
import userController from "../controller/userController.js";
import verifyToken from "../middleware/authMiddleware.js";
import handleValidationErrors from "../middleware/validator/validateRequest.js";
import { loginValidation, registerValidation } from "../middleware/validator/userValidator.js";
import checkRole from "../middleware/roleMiddleware.js";
const router = Router();

//protecetd route

// router.get("/", verifyToken, (req, res) => {
//   res.status(200).json({ message: "Protected route accessed" });
// });

router.post("/",verifyToken,checkRole("seller","admin"), userController.createUser);
router.get("/", userController.getUser);
router.get("/:id", userController.getUserById);
router.delete("/:id",verifyToken, checkRole("admin"),userController.deleteUser);
router.put("/:id", userController.updateUser);
router.post("/register",registerValidation,handleValidationErrors, userController.register);
router.post("/login",loginValidation,handleValidationErrors, userController.login);

/**
 * Complete CRUD operation for user
 * Complete CRUD operation for user/:id
 */

export default router;
