// getting-started.js
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

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive!"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

productSchema.methods.greet = function () {
  console.log("HELLO!!");
  console.log(`- from ${this.name}`);
};
productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};
productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};
const Product = mongoose.model("Product", productSchema);

const finalProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Tire Pump" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};
finalProduct();
Product.fireSale().then((res) => console.log(res));
/*const Product = mongoose.model("Product", productSchema);
const bike = new Product({
  name: "Cycling Jersey",
  price: 28,
  categories: ["Cycling"],
  size: "XS",
});
bike
  .save()
  .then((data) => {
    console.log("IT WORKED");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO ERROR");
    console.log(err);
  });*/
/*Product.findOneAndUpdate(
  { name: "Tire Pump" },
  { price: -19 },
  { new: true, runValidators: true }
)
  .then((data) => {
    console.log("IT WORKED");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO ERROR");
    console.log(err);
  });*/
