// getting-started.js
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp", {
    authSource: "admin",
    user: "root",
    pass: "pass12345",
  })
  .then(() => {
    console.log("CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  tittle: String,
  year: Number,
  score: Number,
  rating: String,
});
const Movie = mongoose.model("Movie", movieSchema);
/*const amadeus = new Movie({
  tittle: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
});*/
//amadeus.save();
/*Movie.insertMany([
  { tittle: "Amelie", year: 2001, score: 8.3, rating: "R" },
  { tittle: "Alien", year: 1979, score: 8.1, rating: "R" },
  { tittle: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
  { tittle: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
  { tittle: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
]).then((data) => {
  console.log("IT WORKED!");
  console.log(data);
});*/

//Movie.find({ year: { $lt: 1990 } }).then((data) => console.log(data));
//Movie.findOne({}).then((m) => console.log(m));
//Movie.findById('660ee0d99f723bfb48e6725b').then((m) => console.log(m));
//Movie.updateOne({tittle:'Amadeus'},{year:1984}).then(res => console.log(res));
/*Movie.updateMany(
  { tittle: { $in: ["Amadeus", "Stand By Me"] } },
  { score: 10 }
).then((res) => console.log(res));*/
/*Movie.findOneAndUpdate({ tittle: "The Iron Giant" }, { score: 7.0 }).then((m) =>
  console.log(m)
);*/
/*Movie.findOneAndUpdate({ tittle: "The Iron Giant" }, { score: 7.8 },{new:true}).then((m) =>
  console.log(m)
);*/
//Movie.deleteMany({ tittle: "Amelie" }).then((msg) => console.log(msg));
//Movie.deleteMany({ year: { $gte: 1999 } }).then((msg) => console.log(msg));
//Movie.findOneAndDelete({ tittle: "Alien" }).then((msg) => console.log(msg));
