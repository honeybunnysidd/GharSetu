const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({}).sort({ updatedAt: -1 });
  res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  let url = req.file.path;
  let filename = req.file.filename;
  let geometry = response.body.features[0].geometry;
  let { title, description, image, price, location, country } =
    req.body.listing;
  let owner = req.user._id;
  const newListing = await Listing.insertOne({
    title,
    description,
    image: { url: url, filename: filename },
    price,
    location,
    country,
    geometry,
    owner,
  });
  console.log(newListing);
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const curListing = await Listing.findById(id)
    .populate({
      path: "reviews",
      options: { sort: { updatedAt: -1 } },
      populate: { path: "author" },
    })
    .populate("owner");
  if (!curListing) {
    req.flash("error", "Listing you requested for does not exist");
    res.redirect("/listings");
  }
  res.render("listings/show", { curListing });
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let editListing = await Listing.findById(id);
  if (!editListing) {
    req.flash("error", "Listing you requested for does not exist");
    res.redirect("/listings");
  }

  let originalImageUrl = editListing.image.url;
  originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit", { editListing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  const listingData = Object.fromEntries(Object.entries(req.body.listing));
  let updateListing = await Listing.findByIdAndUpdate(id, listingData, {
    new: true,
    runValidators: true,
  });
  if (typeof req.file !== "undefined") {
    updateListing.image.url = req.file.path;
    updateListing.image.filename = req.file.filename;
    await updateListing.save();
  }
  req.flash("success", "Listing Updated Successfully");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted Successfully");

  res.redirect("/listings");
};
