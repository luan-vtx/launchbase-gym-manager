const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

server.use(express.static('public'));
server.use(routes);
server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});