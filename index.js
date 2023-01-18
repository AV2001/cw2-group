const express = require("express");
const app = express();

let lessons = [
  {
    topic: "Math",
    location: "Hendon",
    price: 100,
  },
  {
    topic: "English",
    location: "Colindale",
    price: 80,
  },
  {
    topic: "Science",
    location: "Brent cross",
    price: 90,
  },
  {
    topic: "Spanish",
    location: "Goders green",
    price: 120,
  },
];

let users = [
  {
    email: "johndoe@gmail.com",
    password: "1234",
  },
  {
    email: "johndoe@gmail.com",
    password: "1234",
  },
  {
    email: "johndoe@gmail.com",
    password: "1234",
  },
  {
    email: "johndoe@gmail.com",
    password: "1234",
  },
  {
    email: "johndoe@gmail.com",
    password: "1234",
  },
];

app.get("/lessons", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(JSON.stringify(lessons));
});

app.get("/users", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(JSON.stringify(users));
});

app.listen(3000, () => {
  console.log("Server running at 3000!");
});
