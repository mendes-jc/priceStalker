import express from 'express';
import BullBoard from 'bull-board';
import cors from 'cors';
import routes from './routes';
import bull from './app/lib/Queue';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

BullBoard.setQueues([bull]);

export default app;
