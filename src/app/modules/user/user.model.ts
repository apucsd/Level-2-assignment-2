import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt";
import { config } from "../../config";
const userSchema = new Schema<IUser>({
  userId: { type: String, required: true, unique: true },
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
  isActive: { type: Boolean },
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
    required: false, //maked order field optional
  },
});

//use middleware pre and post and post
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, config.salt);
  next();
});
userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

const UserModel = model<IUser>("user", userSchema);
export default UserModel;
