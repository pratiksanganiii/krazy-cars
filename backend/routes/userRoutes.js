const {
  getUserProfile,
  createUser,
  loginUser,
} = require("../controllers/userController");

const router = require("express").Router();

router.route("/").get(getUserProfile).post(createUser);
router.post("/login", loginUser);

module.exports = router;
