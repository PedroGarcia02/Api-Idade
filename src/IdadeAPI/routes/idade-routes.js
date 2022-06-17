const { Router } = require('express');
const { IdadeController } = require('../controllers/idade-controller');

const idadeController = new IdadeController();

const routes = Router();

routes.post('/buscaridade', idadeController.buscaIdade);

module.exports = routes;