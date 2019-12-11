"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Alert = require('../models/Alert'); var _Alert2 = _interopRequireDefault(_Alert);
var _Queue = require('../lib/Queue'); var _Queue2 = _interopRequireDefault(_Queue);

class AlertController {
  async index(req, res) {
    const { email } = req.body;

    const alerts = await _Alert2.default.find({ email });
    console.log(await _Queue2.default.get('EbaySearch').getRepeatableJobs());
    if (alerts) return res.status(200).json(alerts);

    return res.status(500).json({ error: 'Internal server error' });
  }

  async store(req, res) {
    const { email, interval, searchPhrase } = req.body;
    /**
     * Verify if there's already an alert with the same e-mail and search phrase
     */
    const alerts = await _Alert2.default.find({ email, searchPhrase });

    if (alerts.length) {
      return res.status(400).json({
        error: 'You already have an alert registered with the same e-mail and search Phrase',
      });
    }

    const newAlert = new (0, _Alert2.default)({ email, interval, searchPhrase });

    const Job = await _Queue2.default.add('EbaySearch',
      { newAlert }, // Job Data
      { // Job Options
        repeat: {
          // Interval is in minutes, so here it's converted to miliseconds
          every: newAlert.interval * 60 * 1000,
        },
        attempts: 3,
        backoff: {
          type: 'fixed',
          delay: 5000,
        },
      });

    newAlert.jobId = Job.id;

    const alert = await newAlert.save();

    if (!alert) {
      Job.remove();
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.status(201).json(alert);
  }

  async update(req, res) {
    const { id } = req.params;
    const { interval, searchPhrase } = req.body;
    const alert = await _Alert2.default.findById(id).exec();

    if (!alert) {
      return res.status(404).json({ error: 'Invalid id provided.' });
    }

    if (interval) {
      alert.interval = interval;
    }
    if (searchPhrase) {
      alert.searchPhrase = searchPhrase;
    }

    const actualJob = await _Queue2.default.getRepeatable('EbaySearch', alert.jobId);

    if (actualJob) {
      _Queue2.default.get('EbaySearch').removeRepeatableByKey(actualJob.key);
      const newJob = await _Queue2.default.getRepeatable('EbaySearch', alert.jobId);
      console.log(newJob);
    } else {
      console.log(`Warning: There is no job for the alert ${alert.id}`);
    }

    const job = await _Queue2.default.add('EbaySearch',
      { alert }, // Job Data
      { // Job Options
        repeat: {
          // Interval is in minutes, so here it's converted to miliseconds
          every: alert.interval * 60 * 1000,
        },
        attempts: 3,
        backoff: {
          type: 'fixed',
          delay: 5000,
        },
      });

    alert.jobId = job.id;
    await alert.save();
    return res.status(200).json({ message: 'Alert updated.' });
  }

  async delete(req, res) {
    const { id } = req.params;
    _Queue2.default.clean('EbaySearch');
    _Alert2.default.deleteOne({ _id: id }, (err) => {
      if (err) return res.status(404).json({ error: 'Invalid id provided.' });

      return res.status(200).json({ message: 'Alert deleted.' });
    });
  }
}

exports. default = new AlertController();
