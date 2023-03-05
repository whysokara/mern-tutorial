const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});
// @desc Set goals
// @route POST api/goals
// @access private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
  res.status(200).json({ message: "Set Goals" });
});
// @desc update goals
// @route PUT api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update Goal ${req.params.id}` });
});
// @desc DELETE goals
// @route DELETE/:ID api/goals
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete Goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
