// @desc Get goals
// @route GET api/goals
// @access private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};
// @desc Set goals
// @route POST api/goals
// @access private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set Goals" });
};
// @desc update goals
// @route PUT api/goals/:id
// @access private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `update Goal ${req.params.id}` });
};
// @desc DELETE goals
// @route DELETE/:ID api/goals
// @access private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `delete Goal ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
