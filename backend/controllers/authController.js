import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import config from "../config.js";

//user registration
export const register = async (req, res) => {
  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });
    if (existingUser) {
      const conflictField =
        existingUser.username === req.body.username ? "username" : "email";
      return res.status(400).json({
        success: false,
        message: `${
          conflictField.charAt(0).toUpperCase() + conflictField.slice(1)
        } already exists.`,
      });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Create and save the new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: newUser,
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      // Handle duplicate key error
      const duplicateField = Object.keys(err.keyValue)[0]; // `username` or `email`
      res.status(400).json({
        success: false,
        message: `${
          duplicateField.charAt(0).toUpperCase() + duplicateField.slice(1)
        } already exists.`,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed, try again.",
      });
    }
  }
};

//login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        messege: "User not found",
      });
    }

    //if user then check password or compare pasword

    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    //if password is incorrect

    if (!checkCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const { password, role, ...rest } = user._doc;

    //create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15d",
      }
    );
    const cookieExpiration = 15 * 24 * 60 * 60 * 1000;
    //set token in the browswer cookies and send the response to the client

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        maxAge: cookieExpiration,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({
        success: true,
        message: "Successfully login!!",
        token,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to login",
      error: err.message,
    });
  }
};
