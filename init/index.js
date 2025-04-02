const mongoose = require("mongoose");
const { data } = require("./data");
const Listing = require("../models/listing");
const Review = require("../models/review");

//Database Connection
let MONGO_URL = "mongodb://127.0.0.1:27017/GharSetu";
main()
  .then(() => {
    console.log("DB Connected Sucessfully");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

//Insertion of data.js file (initialize)

const initDB = async () => {
  await Listing.deleteMany({});
  await Review.deleteMany({});
  await Listing.insertMany(data);
};

initDB()
  .then(() => {
    console.log("Data initialize Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
