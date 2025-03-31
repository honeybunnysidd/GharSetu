const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Listing = require("./models/listing");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public/")));

app.engine("ejs", ejsMate);

//Database Connection
let MONGO_URL = "mongodb://127.0.0.1:27017/GharSetu";
main()
  .then(() => {
    console.log("DB connected Sucessfully");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

//Validate listing from server side(hopscotch)
const validateListing = (req, res, next) => {
  console.log(req.body);
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};


//Validate Review from server side(hopscotch)
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};


//Home Route
app.get("/", (req, res) => {
  res.redirect("/listings");
});

//Index Route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({}).sort({ updatedAt: -1 });
    res.render("listings/index", { allListings });
  })
);

//Show Route
app.get(
  "/listing/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const curListing = await Listing.findById(id).populate({
      path: "reviews",
      options: { sort: { updatedAt: -1 } }
    });
    
    res.render("listings/show", { curListing });
  })
);

//Create New Listing
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

app.post(
  "/listings",validateListing,
    wrapAsync(async (req, res, next) => {
    let { title, description, image, price, location, country } = req.body.listing;
    console.log(req.body);
    
    await Listing.insertOne({
      title,
      description,
      image: { url: image },
      price,
      location,
      country,
    });

    res.redirect("/listings");
  })
);

//Edit & Update Route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let editListing = await Listing.findById(id);

    res.render("listings/edit", { editListing });
  })
);

app.patch(
  "/listings/:id",
    wrapAsync(async (req, res) => {
    let { id } = req.params;
    console.log(req.body);
    const { title, description, image, price, location, country } = req.body;
    await Listing.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
        image: { url: image },
        location,
        country,
      },
      { new: true, runValidators: true }
    );
    res.redirect(`/listing/${id}`);
  })
);

//Destroy Listing Route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);

//Review Routes
app.post(
  "/listings/:id/review",
  validateReview,
  wrapAsync(async (req, res) => {
  console.log("body : ",req.body)
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log(req.params.id)
    let id = req.params.id;
    res.redirect(`/listing/${id}`);
  })
);

//Page not found
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

//------------------Error Handler Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("listings/error", { message });
});
//Server listen on port 8080
app.listen(8080, () => console.log("Server is listening on port 8080"));
