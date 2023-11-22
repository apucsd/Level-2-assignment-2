import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  fullName: {
    firstName: {
      type: String,
      required: true,
      maxlength: [20, "First name max length is 20 characters"],
    },
    lastName: {
      type: String,
      required: true,
      maxlength: [20, "Last name max length is 20 characters"],
    },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  hobbies: { type: [String], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: {
    type: [
      {
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

//use middleware pre and post and post
userSchema.pre("save", function (next) {
  console.log(this);
  next();
});

const UserModel = model<IUser>("user", userSchema);
export default UserModel;
