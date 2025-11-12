const express = require("express");
const userRoutes = require("./routes/users");
const app = express();
app.set("view engine", "ejs");
app.use("/users", userRouter);
app.get("/", (req, res) => {
  console.log("here");
  res.render("index", { user: "Shawn" });
});
app.listen(3030);
