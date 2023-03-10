const getUserProfile = (req, res) => {
  res.json("getUserProfile");
};
const createUser = (req, res) => {
  res.json("createUser");
};

const loginUser = (req, res) => {
  res.json("loginUser");
};

module.exports = {
  getUserProfile,
  createUser,
  loginUser,
};
