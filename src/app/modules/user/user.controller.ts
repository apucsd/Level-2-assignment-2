/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userServices } from "./user.service";
import userValidationSchema from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const zodValidateSchema = userValidationSchema.parse(user);
    const result = await userServices.createUserToDB(zodValidateSchema);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Error creating user",
      error: error,
    });
  }
};
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUserFromDB();
    res.status(200).json({
      success: true,
      message: "Users Fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching users",
      error: error,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await userServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: "User Fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "User not found",
      error: error,
    });
  }
};
const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedUser = req.body;

    const result = await userServices.updateSingleUserFromDB(
      userId,
      updatedUser
    );

    if (result !== null) {
      res.status(200).json({
        success: true,
        message: "User updated successfully!",
        data: result,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "User not found",
      error: error,
    });
  }
};
const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userServices.deleteSingleUserFromDB(userId);
    if (result.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: "User deleted successfully!",
        data: null,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found",
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "User not found",
      error: {
        code: 404,
        description: "User not found",
      },
    });
  }
};
const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const order = req.body;
    await userServices.createOrderToDB(userId, order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "User not found",
      error: {
        code: 404,
        description: "User not found",
      },
    });
  }
};

export const userController = {
  createUser,
  getUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  createOrder,
};
