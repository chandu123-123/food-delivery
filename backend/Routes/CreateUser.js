const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const secret="hellobhaibolthey"
// express validator

router.post("/createuser", async (req, res) => {
  const salt=await bcrypt.genSalt(10)
  const pass=await bcrypt.hash(req.body.password,salt);
  try {
    const user = await User.create({
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      password: pass,
    });
    res.json({ success: true, message: "User created successfully", user ,authtoken:authtoken});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error creating user" });
  }
});

router.post("/loginuser", async (req, res) => {
  const email = req.body.email;
  

  const user = await User.findOne({ email });
  const password=await bcrypt.compare(req.body.password,user.password)
  if (user) {
    if (password) {
      const data={
        use:{
          id:user.id
        }
      }
      const authtoken=jwt.sign(data,secret)
      res.json({ success: true, message: "Login successful", user ,authtoken});
    } else {
      res.json({ success: false, message: "Incorrect password", alert: "Incorrect password. Please try again." });
    }
  } else {
    res.json({ success: false, message: "User not found" });
  }
});

module.exports = router;
