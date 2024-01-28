const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Token = require("../models/tokenModel");
const { jwtDecode } = require("jwt-decode");
const User = require("../models/userModel");
const { connect } = require("mongoose");
const generateAccessToken = asyncHandler(async (req, res) => {
  const { refreshToken, id } = req.body;
  if (!refreshToken) {
    res.status(401);
    throw new Error("not authorized no token");
  }
  const tokenId = await jwtDecode(refreshToken).id;
  const user = await User.findOne({ _id: tokenId });
  if (id !== user._id.toString()) {
    res.status(401).json({ message: "not` authorized invalid token" });
    return;
  }
  const accessToken = jwt.sign({ id }, process.env.ACCESS_KEY_SECRET, {
    expiresIn: "30m",
  });
  res.status(200).json({ accessToken });
});

const logout = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;
  const token = await Token.findOneAndDelete({ refreshToken });
  if (!token) {
    res.status(401);
    throw new Error("not aithorized");
  }
  console.log(token);

  res.status(200).json({ message: "logged out" });
});
module.exports = { generateAccessToken, logout };
