const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Here");
});
app.listen(3030, () => {
  console.log("hello world");
});
const PORT = 3030;
