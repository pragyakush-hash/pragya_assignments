import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
