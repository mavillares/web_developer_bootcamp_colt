const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const { v4: uuidv4 } = require("uuid");
//uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define the directory where your HTML files (views) are located
app.set("views", path.join(__dirname, "views"));

// Optionally, you can define a static files directory (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

let comments = [
  {
    id: uuidv4(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: uuidv4(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuidv4(),
    username: "Sk8erBoi",
    comment: "lPlz delete your account, Todd",
  },
  {
    id: uuidv4(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];
app.get("/", (req, res) => {
  res.render("getpost");
});
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  res.redirect("/comments");
});
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});
app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});
app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, here are your ${qty} ${meat} tacos`);
});
app.listen(3000, () => {
  console.log("ON PORT 3000");
});
