const express = require("express");

const app = express();
// Mountain path :
// const admin = express();

app.use(express.json());

// app.use(express.static(`${__dirname}/public/`));

// admin.use("/dashboard", (req, res) => {
//   res.send("Admin dashboard was successfully created");
// });

// so ekhon amra (param niye kaj korbo)

app.param("id", (req, res, next, id) => {
  const user = {
    userid: id,
    name: "Bangladesh",
  };

  req.userDetails = user;
  next();
});

// app.get("/", (req, res) => {
//   res.send("This is how server is start");
// });

app.get("/user/:id", (req, res) => {
  console.log(req.userDetails);
  res.send("welcome to our application");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Now post request is running");
});

// app.use("/admin", admin);

app.listen(3000, () => {
  console.log("Listening on a port 3000");
});
