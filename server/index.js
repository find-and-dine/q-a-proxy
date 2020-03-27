const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/:restaurantID', express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/questions/:restaurantID', (req, res) => {
  const { restaurantID } = req.params;
  axios.get(`http://54.70.189.204:3004/api/questions/${restaurantID}/`)
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
