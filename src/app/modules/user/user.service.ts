import { IUser, Order } from "./user.interface";
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
  const result = await UserModel.findOneAndUpdate(
    { id: id }, //find user by id
    { $set: updatedUser }, //update user with updatedUser
    { new: true }
  );

  return result;
};
const deleteSingleUserFromDB = async (id: string) => {
  const result = await UserModel.deleteOne({ id: id });
  return result;
};
const createOrderToDB = async (id: string, order: Order) => {
  const result = await UserModel.updateOne(
    { id: id },
    { $push: { orders: order } }
  );
  return result;
};
const getOrdersFromDB = async (id: string) => {
  const result = await UserModel.findOne({ id: id }, { orders: 1 });
  return result;
};
const calculateTotalPriceFromDB = async (id: string) => {
  const result = await UserModel.aggregate([
    { $match: { id: id } },
    { $unwind: "$orders" },
    {
      $group: {
        _id: "$_id",
        totalPrice: {
          $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
        },
      },
    },
  ]);
  return result;
};

export const userServices = {
  createUserToDB,
  getUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
  deleteSingleUserFromDB,
  createOrderToDB,
  getOrdersFromDB,
  calculateTotalPriceFromDB,
};
