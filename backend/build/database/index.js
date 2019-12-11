"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

_mongoose2.default.connect(process.env.MONGO_URL + process.env.MONGO_DBNAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Mongo connected.');
});

exports. default = _mongoose2.default;
