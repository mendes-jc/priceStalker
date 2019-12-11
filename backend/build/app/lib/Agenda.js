"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _agenda = require('agenda'); var _agenda2 = _interopRequireDefault(_agenda);
var _jobs = require('../jobs'); var _jobs2 = _interopRequireDefault(_jobs);
var _ebayAuth = require('../services/ebayAuth'); var _ebayAuth2 = _interopRequireDefault(_ebayAuth);

const agenda = new (0, _agenda2.default)({ db: { address: process.env.MONGO_URL + process.env.MONGO_DBNAME } });

Object.values(_jobs2.default).forEach((job) => {
  agenda.define(job.key, job.handle);
});

agenda.on('fail', async (err, job) => {
  console.log(err, job);
  agenda.token = await _ebayAuth2.default.call(void 0, );
});

agenda.on('start:EbaySearch', async (job) => {
  console.log(`Job ${job.attrs.name} starting`);
  agenda.token = await _ebayAuth2.default.call(void 0, );
});

exports. default = agenda;
