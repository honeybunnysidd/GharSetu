const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userControllers = require("../controllers/user.js");

//SignUp routes
router.get("/signup", userControllers.signupForm);

router.post("/signup", wrapAsync(userControllers.signupUser));

//Login Routes
router.get("/login", userControllers.loginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userControllers.loginUser
);

//Logout
router.get("/logout", userControllers.logout);

module.exports = router;
