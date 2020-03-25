const express = require('express');
const routes = express.Router();

routes.get('/test', (request, response) => {
  const { body, query, params } = request;
  console.log('Request:\n', { body, query, params});

  return response.json({
    msg: 'Success!',
  });
});

routes.post('/users', (request, response) => {
  const { body } = request;
  console.log(body);

  return response.json({
    msg: 'Success!',
    data: body,
  });
});


module.exports = routes;