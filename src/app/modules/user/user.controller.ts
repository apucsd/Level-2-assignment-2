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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Error creating user",
      error: error,
    });
  }
};

export const userController = {
  createUser,
};
