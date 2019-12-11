"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _bull = require('bull'); var _bull2 = _interopRequireDefault(_bull);

var _redis = require('../../config/redis'); var _redis2 = _interopRequireDefault(_redis);
var _jobs = require('../jobs'); var _jobs2 = _interopRequireDefault(_jobs);

const queues = Object.values(_jobs2.default).map((job) => ({
  bull: new (0, _bull2.default)(job.key, _redis2.default),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

exports. default = {
  queues,
  add(name, data, options) {
    const queue = this.queues.find((item) => item.name === name);
    return queue.bull.add(data, options);
  },
  get(name) {
    const { bull } = this.queues.find((item) => item.name === name);
    return bull;
  },
  async getRepeatable(name, id) {
    const queue = this.queues.find((item) => item.name === name);
    if (!queue) return null;

    const repeatableJobs = await queue.bull.getRepeatableJobs();
    return repeatableJobs.find((item) => item.id === id);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);
      queue.bull.on('failed', (job, err) => {
        console.log('A job has failed', queue.key, job.data);
        console.log(err);
      });
    });
  },
};
