const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('users/list', { users:users });
});


router.get('/new', (req, res) => {
  res.render('users/new', {firstName: ""});
});


router.get("/new", (req, res) => {
  res.send("New User Form");
});

router.post("/", (req, res) => {
 
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const gender = req.body.gender;
  const isValid = firstName !== "";
  if(isValid) {
    
  console.log('Adding User: ${firstName}');
  users.push({ firstName:firstName, lastName:lastName, gender:gender, age:age});
  console.log('New Set od users: ${users}');
  res.send(" User Created");

  } else {
    console.log('Error adding user!');
    res.render('users/new', { firstName:firstName });
  }
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

  const users = [
    { name: "Shawn" },
    { name: "John", },
  ];
module.exports = router;
