const express = require("express");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const app = express();
app.set("view engine", "ejs");
app.use("/users", userRouter);
app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  console.log("here");
  res.render("index", { user: "Shawn" });
});
app.listen(3030);
