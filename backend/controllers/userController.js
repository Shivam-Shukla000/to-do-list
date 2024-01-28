const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Token = require("../models/tokenModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    console.log("add all fields");
    throw new Error("add all fields");
  }
  const USerExist = await User.findOne({ email });
  if (USerExist) {
    res.status(400);
    console.log("user already exist ");
    throw new Error("user already exist ");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res
      .sendStatus(400)
      .json({ message: "something went wrong user not created" });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log("done");
  const data = await bcrypt.compare(password, user.password);
  if (user && data) {
    const userId = user._id;
    const accessToken = generateAccessToken(userId);
    const refreshToken = generateRefreshToken(userId);

    await Token.create({ refreshToken });
    res.status(200).json({
      _id: userId,
      name: user.name,
      email: user.email,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } else {
    res.status(400).json({ message: "invalid credentials" });
  }
});
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

function generateAccessToken(id) {
  return jwt.sign({ id }, process.env.ACCESS_KEY_SECRET, {
    expiresIn: "30m",
  });
}
function generateRefreshToken(id) {
  return jwt.sign({ id }, process.env.REFRESH_KEY_SECRET);
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
