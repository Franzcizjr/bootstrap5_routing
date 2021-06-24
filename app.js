// jshint esversion: 6
require('dotenv').config();
const express = require('express');
//const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const User = require("./config/db");

// get routes
const getRoute = require("./routes/get");
app.get('/', getRoute);
app.get('/login', getRoute);
app.get("/home", (req, res) => {
  res.render("home");
});

// post routes
const postRoute = require("./routes/post");
app.post('/', postRoute);
app.post('/login', postRoute);

// User.deleteOne({name: "Franse Media"}, (err) => {
//   if (!err) {
//     console.log("deleted");
//     User.find((err, users) => {
//       if(!err) {
//         console.log(users);
//       } else {
//         console.log(err);
//       }
//     });
//   } else {
//     console.log(err);
//   }
// });


const PORT = process.env.PORT || 5000;
//const PORT = process.env.PORTAL;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
