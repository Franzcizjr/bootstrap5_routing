// jshint esversion: 6

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Master', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected to database'))
.catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  email: {
    type: String,
    required: [true, "email is required"]
  },
  password: {
    type: String,
    required: [true, "password is required"]
  },
  img: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
