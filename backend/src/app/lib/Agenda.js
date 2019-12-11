import Agenda from 'agenda';
// eslint-disable-next-line import/no-cycle
import jobs from '../jobs';
import getToken from '../services/ebayAuth';

const agenda = new Agenda({ db: { address: process.env.MONGO_URL + process.env.MONGO_DBNAME } });

Object.values(jobs).forEach((job) => {
  agenda.define(job.key, job.handle);
});

agenda.renewToken = async () => {
  agenda.token = await getToken();
  console.log('Ebay token renewed');
};
agenda.renewToken();

agenda.on('fail', async (err) => {
  console.log(err);
});

agenda.on('start:EbaySearch', async (job) => {
  console.log(`Job ${job.attrs.name} starting`);
});

export default agenda;
