const express = require('express');
const app = express();

let lessons = [
  {
    topic: 'Math',
    location: 'Hendon',
    price: 100,
  },
  {
    topic: 'English',
    location: 'Colindale',
    price: 80,
  },
  {
    topic: 'Science',
    location: 'Brent cross',
    price: 90,
  },
  {
    topic: 'Spanish',
    location: 'Goders green',
    price: 120,
  },
];

let users = [
  {
    email: 'johndoe@gmail.com',
    password: '123joh',
  },
  {
    email: 'admin@gmail.com',
    password: '1234',
  },
  {
    email: 'anirudh@gmail.com',
    password: '123ani',
  },
  {
    email: 'abdul@gmail.com',
    password: '123abd',
  },
  {
    email: 'khadija@gmail.com',
    password: '123kha',
  },
];

app.get('/', (req, res) => {
  res.send(`<h1>Usage</h1>
  <p>Add <strong>"/lessons"</strong> to the end of the URL to receive the lessons data in JSON.</p>
  <p>Add <strong>"/users"</strong> to the end of the URL to receive the users data in JSON.</p>
  <p>To see the output of the lessons, run the server using node index.js and then run the local server in VS Code on the index.html file.</p>
  `);
});

app.get('/lessons', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(lessons));
});

app.get('/users', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(users));
});

app.get('*', (req, res) => {
  res.send('<h1>404 File Not Found!</h1>');
});

app.listen(3000, () => {
  console.log('Server running at 3000!');
});
