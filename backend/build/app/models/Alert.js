"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _database = require('../../database'); var _database2 = _interopRequireDefault(_database);

const alertSchema = _database2.default.Schema({
  email: String,
  searchPhrase: String,
  interval: Number,
  jobId: String,
});

exports. default = _database2.default.model('Alert', alertSchema);
