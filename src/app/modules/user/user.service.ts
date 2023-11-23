import { IUser } from "./user.interface";
import UserModel from "./user.model";

const createUserToDB = async (user: IUser): Promise<IUser> => {
  return await UserModel.create(user);
};
const getUserFromDB = async () => {
  return await UserModel.find(
    {},
    {
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      address: 1,
    }
  );
};

const getSingleUserFromDB = async (id: string): Promise<IUser | null> => {
  //static method for getting single data
  return await UserModel.findOne({ id: id });
};

export const userServices = {
  createUserToDB,
  getUserFromDB,
  getSingleUserFromDB,
};
