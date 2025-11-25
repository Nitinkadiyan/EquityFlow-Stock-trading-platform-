const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const authMiddleware = require("../middleware/authMiddleware");



// your existing cookie options
const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  path:"/",
  expires:new Date(Date.now()+7*24*60*60*1000),
};

// ======================
//        SIGNUP
// ======================
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "User exists" });

    const hash = await bcrypt.hash(password, 10);

    await User.create({
      email,
      passwordHash: hash
    });

    return res.json({ message: "Signup success" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ======================
//        LOGIN
// ======================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email" });

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(400).json({ error: "Invalid password" });

    // create 1-day JWT
    const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d"
    });

    // save token in cookie
    res.cookie("sessiontoken", token, cookieOptions);

    return res.status(200).json({ message: "Login success" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("sessionToken", {
    path: "/",
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  return res.status(200).json({ message: "Logout successful" });
});


router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});
module.exports = router;