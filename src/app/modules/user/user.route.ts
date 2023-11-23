import express from "express";
import { userController } from "./user.controller";

const router = express.Router();
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:userId", userController.getSingleUser);
router.get("/users/:userId/orders", userController.getOrders);
router.put("/users/:userId ", userController.updateSingleUser);
router.delete("/users/:userId", userController.deleteSingleUser);
router.put("/users/:userId/orders", userController.createOrder);

export const userRouter = router;
