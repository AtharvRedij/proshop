const express = require("express");
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
    res.json({
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

module.exports = router;