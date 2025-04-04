const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware.js");

//Validate listing from server side(hopscotch)
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({}).sort({ updatedAt: -1 });
    res.render("listings/index", { allListings });
  })
);

//Create New Listing
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    let { title, description, image, price, location, country } =
      req.body.listing;
    console.log(req.body);

    await Listing.insertOne({
      title,
      description,
      image: { url: image },
      price,
      location,
      country,
    });
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
  })
);

//Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const curListing = await Listing.findById(id).populate({
      path: "reviews",
      options: { sort: { updatedAt: -1 } },
    });
    if (!curListing) {
      req.flash("error", "Listing you requested for does not exist");
      res.redirect("/listings");
    }
    res.render("listings/show", { curListing });
  })
);

//Edit & Update Route
router.get(
  "/:id/edit",isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let editListing = await Listing.findById(id);
    if (!editListing) {
      req.flash("error", "Listing you requested for does not exist");
      res.redirect("/listings");
    }
    res.render("listings/edit", { editListing });
  })
);

router.patch(
  "/:id",isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
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
    req.flash("success", "Listing Updated Successfully");

    res.redirect(`/listings/${id}`);
  })
);

//Destroy Listing Route
router.delete(
  "/:id",isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfully");

    res.redirect("/listings");
  })
);

module.exports = router;
