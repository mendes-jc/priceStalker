import { Router } from 'express';
import BullBoard from 'bull-board';

import AgendaController from './app/controllers/AgendaController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Server is online' });
});

routes.get('/alerts', AgendaController.index);
routes.post('/alerts', AgendaController.store);
routes.put('/alerts/:id', AgendaController.update);
routes.delete('/alerts/:id', AgendaController.delete);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.use('/admin', BullBoard.UI);


export default routes;
