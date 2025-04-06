const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({}).sort({ updatedAt: -1 });
  res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
  let { title, description, image, price, location, country } =
    req.body.listing;
  let owner = req.user._id;
  const newListing = await Listing.insertOne({
    title,
    description,
    image: { url: image },
    price,
    location,
    country,
    owner,
  });
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
  res.render("listings/edit", { editListing });
};

module.exports.updateListing = async (req, res) => {
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
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted Successfully");

  res.redirect("/listings");
};
