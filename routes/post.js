// jshint esversion:6

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../config/db");




router.post('/', function(req, res) {
  var error = [];
  const {name, email, password} = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const newUser = new User({
    name,
    email,
    password: hash
  });


  if(!name || !email || !password) {
    console.log("enter all fields");
    error.push({msg: "enter all fields"});
      res.render("register", {errorMsg: error});
  } else {
    User.findOne({email: email}, (err, foundUser) => {
      if (!foundUser) {
        newUser.save()
        .then(()=>{
          console.log(newUser);
          //res.json(newUser);
          res.redirect("/login");
        })
        .catch((err) => console.log(err));
      } else {
        console.log(err);
        error.push({msg: "email already exists"});
        console.log(error);
        res.render("register", {errorMsg: error});
      }
    });
  }
});


router.post("/login", (req, res) => {
  var error = [{msg: ""}];
  res.render("login", {errorMsg: error});
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    error.push({msg: "enter all fields"});
  } else {
    User.findOne({email}, (err, foundUser) => {
      if (err) {
        console.log(err);
      } else {
        if(foundUser) {
          console.log("user exists");
        } else {
          error.push({msg: "email doesn't exist"});
        }
      }
    });
  }
});

module.exports = router;
