const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//For Encrypting Passwords
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'hellow$$orld';


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

      //Adding Salt to the Password
      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(req.body.password, salt);

      //Creating a New User
      user = await User.create({
        name: req.body.name,
        password: securePass, //Sending Encrypted Password to the Database
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id
        }
      }

      const authToken = jwt.sign(data, JWT_SECRET);
      // res.json(user);
      res.json(authToken);
    } 
    
    catch (error) {
      console.error(error.message);
      res.status(500).send("Error!!!");
    }
  }
);

module.exports = router;
