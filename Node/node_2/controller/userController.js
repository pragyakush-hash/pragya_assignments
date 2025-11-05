import User from "../models/userModel.js";

// create all the remaining controllers

const createUser = async (req, res) => {
  try {
    console.log(req.body, "resquestbody");
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error, "error for create user");
    res.status(400).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error, "error for get user");

    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "user not found!" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userDelete = await User.findByIdAndDelete(req.params.id);
    if (!userDelete)
      return res.status(404).json({ message: "user not found for deletion" });
    res.json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updating = await User.findByIdAndUpdate(req.params.id, res.body, {
      new: true,
    });
    if (!updating)
      return res.status(404).json({ message: "user not found for updating" });
    res.json({ message: "user updating successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default { createUser, getUser, getUserById, deleteUser, updateUser };
