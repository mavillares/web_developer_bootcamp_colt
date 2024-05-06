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
      author: "662a062dbe9bae5db97ce94a",
      location: `${cities[random1000].city},${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ratione dolorum voluptate quidem, perspiciatis, cumque eum enim fugiat, beatae aliquam non nostrum placeat ex fugit deleniti ipsa neque esse quo!",
      price,
      images: [
        {
          url: "https://res.cloudinary.com/dqrucw3oz/image/upload/v1714726009/YelpCamp/q6baps4xnvehcbuey7iy.avif",
          filename: "YelpCamp/q6baps4xnvehcbuey7iy",
        },
        {
          url: "https://res.cloudinary.com/dqrucw3oz/image/upload/v1714726010/YelpCamp/ta0tlnwxvabetsfcwkgl.avif",
          filename: "YelpCamp/ta0tlnwxvabetsfcwkgl",
        },
      ],
    });
    await camp.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
