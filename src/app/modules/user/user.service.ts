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
const updateSingleUserFromDB = async (
  id: string,
  updatedUser: IUser
): Promise<IUser | null> => {
  //static method for updating single data
  console.log(updatedUser, "///////////////////////////////", id);
  const result = await UserModel.findOneAndUpdate(
    { id: id },
    { $set: updatedUser },
    { new: true }
  );
  // console.log(result);
  return result;
};

export const userServices = {
  createUserToDB,
  getUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
};
