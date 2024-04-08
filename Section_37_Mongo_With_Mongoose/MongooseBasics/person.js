const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
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

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});
personSchema.virtual("fullname").get(function () {
  return ` ${this.first} ${this.last}`;
});

personSchema.pre("save", async function () {
  console.log("ABOUT TO SAVE!!!");
});
personSchema.pre("save", async function () {
  console.log("JUST SAVED!!!");
});
const Person = mongoose.model("Person", personSchema);
const tammy = new Person({ first: "Kristen", last: "sun" });
tammy.save();
