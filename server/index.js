const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const PHOTOS_URI = '3.17.141.223:3001';
const MENU_URI = '35.165.82.243';
// const REVIEWS_URI =
const QA_URI = '54.70.189.204:3004';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/:restaurantID', express.static(path.resolve(__dirname, '..', 'public')));

// Forward request for photos
app.get('/photos/:restaurantID', (req, res) => {
  const { restaurantID } = req.params;
  axios.get(`http://${PHOTOS_URI}/photos/${restaurantID}/`)
      .then((response) => response.data)
      .then((questions) => {
        res.status(200).send(questions);
      })
      .catch(() => {
        res.sendStatus(500);
      });
});

// Forward request for menu
app.get('/api/menu/:restaurantID', (req, res) => {
  const { restaurantID } = req.params;
  axios.get(`http://${MENU_URI}/api/menu/${restaurantID}/`)
      .then((response) => response.data)
      .then((questions) => {
        res.status(200).send(questions);
      })
      .catch(() => {
        res.sendStatus(500);
      });
});

// Forward request for reviews

// Forward request for questions
app.get('/api/questions/:restaurantID', (req, res) => {
  const { restaurantID } = req.params;
  axios.get(`http://${QA_URI}/api/questions/${restaurantID}/`)
      .then((response) => response.data)
      .then((questions) => {
        res.status(200).send(questions);
      })
      .catch(() => {
        res.sendStatus(500);
      });
});

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000.');
})
