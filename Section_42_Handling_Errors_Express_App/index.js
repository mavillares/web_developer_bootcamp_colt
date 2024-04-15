const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./AppError");

app.use(morgan("tiny"));
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});
app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS!!");
  next();
});
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  throw new AppError("password required", 401);
  //throw new AppError(401, "Password required!!");
  res.send("SORRY YOU NEED A PASSWORD!!!");
};

/*app.use((req, res, next) => {
  console.log("THIS IS MY FIRST MIDDLEWARE!!");
  return next();
  console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()");
});
app.use((req, res, next) => {
  console.log("THIS IS MY SECOND MIDDLEWARE!!");
  return next();
});
app.use((req, res, next) => {
  console.log("THIS IS MY THIRD MIDDLEWARE!!");
  return next();
});*/

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("HOME PAGE!");
});
app.get("/error", (rew, res) => {
  chicken.fly();
});
app.get("/dogs", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("WOOF WOOF!");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("MY SECRET IS: Sometimes..");
});
app.get("/admin", (req, res) => {
  throw new AppError("You are not an admin!", 403);
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND!");
});
/*app.use((err, req, res, next) => {
  console.log("******************************");
  console.log("************ERROR**************");
  console.log("******************************");
  console.log(err);
  next(err);
});*/
app.use((err, req, res, next) => {
  const { status = 500 } = err;
  const { message = "Something Went Wrong" } = err;
  res.status(status).send(message);
});
app.listen(3000, () => {
  console.log("App is running in localhost:3000");
});
