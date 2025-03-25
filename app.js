const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const { Listing } = require("./models/listing");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

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

//Home Route
app.get("/", (req, res) => {
  res.redirect("/listings");
});

//Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
});

//Show Route
app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  const curListing = await Listing.findById(`${id}`);
  res.render("listings/show", { curListing });
});

//Create New Listing
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

app.post("/listings", async (req, res) => {
  let { title, description, price, location, country } = req.body;
  await Listing.insertOne({ title, description, price, location, country });
  res.redirect("/listings");
});

//Edit & Update Route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  let editListing = await Listing.findById(id);

  res.render("listings/edit", { editListing });
});

app.patch("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const { title, description, price, location, country } = req.body;
  await Listing.findByIdAndUpdate(
    id,
    {
      title,
      description,
      price,
      location,
      country,
    },
    { new: true, runValidators: true }
  );
  res.redirect(`/listing/${id}`);
});

//Destroy Listing Route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

//Server listen on port 8080
app.listen(8080, () => console.log("Server is listening on port 8080"));
