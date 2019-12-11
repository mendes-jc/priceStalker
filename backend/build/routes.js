"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _bullboard = require('bull-board'); var _bullboard2 = _interopRequireDefault(_bullboard);

var _AgendaController = require('./app/controllers/AgendaController'); var _AgendaController2 = _interopRequireDefault(_AgendaController);

const routes = new (0, _express.Router)();

routes.get('/', (req, res) => {
  res.json({ message: 'Server is online' });
});

routes.get('/alerts', _AgendaController2.default.index);
routes.post('/alerts', _AgendaController2.default.store);
routes.put('/alerts/:id', _AgendaController2.default.update);
routes.delete('/alerts/:id', _AgendaController2.default.delete);

routes.use('/admin', _bullboard2.default.UI);

exports. default = routes;
