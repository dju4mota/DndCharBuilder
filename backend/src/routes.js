const express = require('express');
const routes = express.Router();
const Characters = require('./controllers/Characters')


routes.post('/Characters', Characters.create);
routes.get('/Characters', Characters.index)
routes.put('/Characters/:id', Characters.change);
routes.delete('/Characters/:id', Characters.delete);

module.exports = routes;