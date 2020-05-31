//Arquivo principal da aplicação

const express = require('express'); 
const routes = require('./routes'); //Importando as rotas do gerenciador de rotas (routes.js)
//const cors = require('cors');

const app = express();

app.use(express.json());    //Parseamento de informações do tipo JSON
//app.use(cors());

app.use(routes);


app.listen(3042, ()=> console.log("BackEnd Iniciado 🍕"));