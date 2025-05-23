if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public/")));

app.engine("ejs", ejsMate);

//Database Connection
// let MONGO_URL = "mongodb://127.0.0.1:27017/GharSetu";
let MONGO_URL = process.env.ATLASDB_URL;
main()
  .then(() => {
    console.log("DB connected Sucessfully");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

//Mongo Session
const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 60 * 60,
});

store.on("error", () => {
  console.log("Error in Mongo Session Store", err);
});

//Creating Sessions
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

//Home Route
app.get("/", async (req, res) => {
  res.redirect("/listings");
});
//Session and Flash
app.use(session(sessionOptions));
app.use(flash());

//Login (Authentication - Passport npm)
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); // Login
passport.deserializeUser(User.deserializeUser()); // Logout

//Store Info for Ejs- Middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

//Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

//Page not found
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

//------------------Error Handler Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("listings/error", { message, err });
});
//Server listen on port 8080
app.listen(8080, () => console.log("Server is listening on port 8080"));
