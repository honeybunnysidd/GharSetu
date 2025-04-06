const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

// (/ Route)
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    validateListing,
    isLoggedIn,
    wrapAsync(listingController.createListing)
  );

//Create New Listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

// (/:id Route)
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .patch(isLoggedIn, isOwner, wrapAsync(listingController.updateListing))
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit & Update Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
