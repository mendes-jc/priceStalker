"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _bullboard = require('bull-board'); var _bullboard2 = _interopRequireDefault(_bullboard);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _Agenda = require('./app/lib/Agenda'); var _Agenda2 = _interopRequireDefault(_Agenda);

class App {
  constructor() {
    this.server = _express2.default.call(void 0, );
    this.init();
    this.routes();
  }

  init() {
    this.server.use(_express2.default.json());
    // BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));
  }

  routes() {
    this.server.use(_routes2.default);
  }
}

exports. default = new App().server;
