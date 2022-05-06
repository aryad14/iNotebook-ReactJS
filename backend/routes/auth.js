const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Creating a User using: POST "/api/auth/newUser"
router.post(
  "/newUser",
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If errors Exist, return Error Message
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check if user with same email already exist
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Email Already Exists!!!" });
      }
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });

      res.json(user);
    } 
    
    catch (error) {
      console.error(error.message);
      res.status(500).send("Error!!!");
    }
  }
);

module.exports = router;
