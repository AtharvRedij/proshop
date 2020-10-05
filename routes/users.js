const express = require("express");
const auth = require("../middlewares/auth");
const User = require("../models/user");
const generateToken = require("../utils/generateToken.js");

const router = express.Router();

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

router.get("/profile", auth, async (req, res) => {
  const { _id, name, email, isAdmin } = req.user;

  res.send({ _id, name, email, isAdmin });
});

module.exports = router;
