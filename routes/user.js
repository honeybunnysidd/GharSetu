const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const User = require("../models/user.js");
const passport = require("passport");

//SignUp routes
router.get("/signup", (req, res) => {
  res.render("users/signup");
});

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      let newUser = new User({
        username,
        email,
      });
      let registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.flash("success", `${username} : Welcome to GharSetu!`);
      res.redirect("/listings");
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
  })
);

//Login Routes
router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post(
  "/login",

  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Login Successfully");
    res.redirect("/listings");
  }
);

module.exports = router;
