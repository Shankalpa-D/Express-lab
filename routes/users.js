const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users List");
});

router.get("/new", (req, res) => {
  res.send("New User Form");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Getting Uder ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Deleting User ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Updating User ID: ${req.params.id}`);
  });
module.exports = router;
