const express = require('express');
const routes = express.Router();
const Atributos = require('./controllers/Atributos')
const Personagens = require('./controllers/Personagens')

routes.put('/atributos/:id', Atributos.update);
routes.get('/atributos/:id', Atributos.index)

routes.post('/personagens', Personagens.create);
routes.get('/personagens', Personagens.index)

module.exports = routes;