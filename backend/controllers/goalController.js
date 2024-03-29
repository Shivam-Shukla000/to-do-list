const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user._id });
  res.status(200).json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("no data was sent");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user._id,
  });
  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const goal = await Goal.findById(req.params.id);
  console.log(goal);
  console.log("checking goal");
  if (!goal) {
    req.status(400).json({ message: "goal not found" });
    return;
  }
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401).json({ message: "user not found" });
    return;
  }

  if (goal.user.toString() !== user._id.toString()) {
    console.log("id didnt match");
    res.status(401).json({ message: "user not authorized" });
    return;
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ updatedGoal });
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    req.status(400).json({ message: "goal not found" });
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401).json({ message: "user not found" });
  }
  if (goal.user.toString() !== user.id) {
    res.status(401).json({ message: "user not authorized" });
  }
  await goal.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
