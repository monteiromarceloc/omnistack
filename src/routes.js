const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.get('/test', (request, response) => {
  return response.send('Success!');
});

module.exports = routes;