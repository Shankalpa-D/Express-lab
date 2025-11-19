const express = require("express");

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");


const app = express();
app.set("view engine", "ejs");
<<<<<<< Updated upstream
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


=======
>>>>>>> Stashed changes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);


app.get("/", (req, res) => {
  console.log("here");
  res.render("index", { user: "Shawn" });
});
app.listen(3030);
app.get('/new', (req, res) => {
  res.render('users/new', {firstName: "Please enter ur name"});
});

function logger(req, res, next) {
  console.log(`page accessed: ${req.originalUrl}`);
  next();
}