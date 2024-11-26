import User from "../models/User.js";
//create new  User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await new User.save();
    res.status(200).json({
      success: true,
      messege: "successfully created",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed, try again.",
      error: err,
    });
  }
};
//update  User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed, try again.",
      error: err,
    });
  }
};

//delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed, try again.",
      error: err,
    });
  }
};
//get single  User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found.",
      error: err,
    });
  }
};
//Get All  User
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,

      message: "not found.",
      error: err,
    });
  }
};
