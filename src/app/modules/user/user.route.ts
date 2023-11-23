import express from "express";
import { userController } from "./user.controller";

const router = express.Router();
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:userId", userController.getSingleUser);
router.put("/users/:userId", userController.updateSingleUser);
router.get("/users/:userId/orders", userController.getOrders);
router.delete("/users/:userId", userController.deleteSingleUser);
router.put("/users/:userId/orders", userController.createOrder);
router.get(
  "/users/:userId/orders/total-price",
  userController.getTotalOrdersPrice
);

export const userRouter = router;
