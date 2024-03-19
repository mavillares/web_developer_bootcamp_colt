const express = require("express");
const app = express();

/*app.use((req, res) => {
  console.log("WE GOT A NEW REQUEST!!");
  //res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE");
  //res.send({ color: "red" });
  res.send("<h1>This is my webpage!</h1>");
});*/

app.get("/", function (req, res) {
  res.send("This is the home page!");
});
app.get("/r/:subreddit", function (req, res) {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});
app.get("/r/:subreddit/:postId", function (req, res) {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} the ${subreddit} subreddit</h1>`);
});
app.post("/cats", function (req, res) {
  res.send("POST REQUEST TO /cats!!");
});
app.get("/cats", function (req, res) {
  res.send("MEOW!!");
});
app.get("/dogs", function (req, res) {
  res.send("WOOF!!");
});
app.get("/search", function (req, res) {
  const { q } = req.query;
  if (!q) {
    res.send("NOTHING FOUND IF NOTHING SEARCHED!");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});
app.get("*", function (req, res) {
  res.send("I don´t know that path!!");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
