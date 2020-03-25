const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    title: 'Hello World',
    description: 'This is a node boilerplate project.',
  });
});

app.listen(3333);
