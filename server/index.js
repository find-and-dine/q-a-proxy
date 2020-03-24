const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/:restaurantID', express.static(path.resolve(__dirname, '..', 'public')));

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000.');
})