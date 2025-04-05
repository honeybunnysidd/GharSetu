const mongoose = require("mongoose");
const { Schema } = mongoose;
const reviewSchema = new mongoose.Schema(
  {
    comment: String,
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
