const express = require('express');
const instructorsMiddleware = require('./middlewares/instructors');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.redirect('/instructors');
});

routes.get('/instructors', (req, res) => {
  return res.render('instructors/index');
});

routes.get('/instructors/create', (req, res) => {
  return res.render('instructors/create');
});

routes.get('/members', (req, res) => {
  return res.send('/members');
});

routes.post('/instructors', instructorsMiddleware.postInstructor);

module.exports = routes;