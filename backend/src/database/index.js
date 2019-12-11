import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL + process.env.MONGO_DBNAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Mongo connected.');
});

export default mongoose;
