const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationshipDemo", {
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

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

/*const makeTweets = async () => {
  //const user = new User({ username: "chickenfan99", age: 61 });
  const user = await User.findOne({ username: "chickenfan99" });
  const tweet2 = new Tweet({
    text: "bock bock bock my chickens make noises",
    likes: 1232,
  });
  tweet2.user = user;
  tweet2.save();
};
makeTweets();*/

const findTweets = async () => {
  const t = await Tweet.findOne({}).populate("user", "username");
  console.log(t);
};
findTweets();
