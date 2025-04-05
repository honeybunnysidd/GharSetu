const mongoose = require("mongoose");
let { data } = require("./data");
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
  data = data.map((obj) => ({ ...obj, owner: "67f0725ad507ec1007ce28b5" }));
  await Listing.insertMany(data);
  console.log("Data initialize Successfully");
};

initDB();
