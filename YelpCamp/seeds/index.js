const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose
  .connect("mongodb://localhost:27017/yelp-camp", {
    authSource: "admin",
    user: "root",
    pass: "pass12345",
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO ERROR!!");
    console.log(err);
  });

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city},${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/random?camp",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ratione dolorum voluptate quidem, perspiciatis, cumque eum enim fugiat, beatae aliquam non nostrum placeat ex fugit deleniti ipsa neque esse quo!",
      price,
    });
    await camp.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
