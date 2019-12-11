import express from 'express';
import BullBoard from 'bull-board';
import cors from 'cors';
import routes from './routes';
import bull from './app/lib/Queue';

class App {
  constructor() {
    this.server = express();
    this.init();
    this.routes();
  }

  init() {
    this.server.use(express.json());
    this.server.use(cors());
    BullBoard.setQueues([bull]);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
