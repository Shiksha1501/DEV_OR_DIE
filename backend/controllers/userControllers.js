const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    resizeBy.status(400);
    throw new Error("please enter all the feilds");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    resizeBy.status(400);
    throw new Error("user already exists");
  }

  const user = await User.create({
    name,
    email,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("failed to create the user");
  }
});

// const allUsers = asyncHandler(async (req, res) => {
//   const keyword = req.query;
//   console.log(query)
// });

module.exports = { registerUser };
