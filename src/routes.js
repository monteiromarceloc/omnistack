const express = require('express');
const OngController = require('./controllers/OngController')
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/test', (request, response) => {
  return response.send('Success!');
});

module.exports = routes;