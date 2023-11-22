import { IUser } from "./user.interface";
import UserModel from "./user.model";

const createUserToDB = async (user: IUser): Promise<IUser> => {
  return await UserModel.create(user);
};
const getUserFromDB = async () => {
  return await UserModel.find();
};

export const userServices = {
  createUserToDB,
  getUserFromDB,
};
