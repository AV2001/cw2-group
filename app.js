const express = require('express');
const app = express();

const lessons = [
  {
    topic: 'Math',
    location: 'Hendon',
    price: 100,
  },
  {
    topic: 'Math',
    location: 'Colindale',
    price: 80,
  },
  {
    topic: 'Math',
    location: 'Brent cross',
    price: 90,
  },
  {
    topic: 'Math',
    location: 'Goders green',
    price: 120,
  },
];

app.listen(3000, () => {
  console.log('Server running at 3000!');
});
