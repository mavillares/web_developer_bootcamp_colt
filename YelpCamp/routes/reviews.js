const express = require("express");
const router = express.Router({ mergeParams: true });
const reviews = require("../controllers/reviews.js");
const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/ExpressError");
const Campground = require("../models/campground");
const Review = require("../models/review.js");

const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const review = require("../models/review.js");

router.post("/", isLoggedIn, validateReview, catchAsync(reviews.newReview));
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
