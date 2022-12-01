require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4321;

app.get('/', (request, response) => {
  response.send(`Hello World. I am listening to ${PORT}`);
});

app.get('/dburl', (request, response) => {
    response.send(`My connection string is: ${process.env.DATABASE_URL}`)
  });

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`); //completely optional
});