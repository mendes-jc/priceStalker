import Mongo from '../../database';

const userSchema = Mongo.Schema({
  name: String,
  email: String,
});

export default Mongo.model('User', userSchema);
