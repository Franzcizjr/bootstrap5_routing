// jshint esversion: 6
const express = require('express');
const router = express.Router();
const User = require("../config/db");

router.get('/', (req, res) => {
  User.find((err, foundUsers) => {
    if(!err){
      //res.send(foundUsers);
      res.render('register', {errorMsg: ""});
    } else {
      console.log(err);
    }
  });
});
router.get('/login', (req, res) => {
  res.render("login", {errorMsg: ""});
});

module.exports = router;
