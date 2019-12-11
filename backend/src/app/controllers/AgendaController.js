import agenda from '../lib/Agenda';

class AgendaController {
  async index(req, res) {
    const { email } = req.query;
    const jobs = await agenda.jobs({ 'data.email': email });
    return res.json(jobs);
  }

  async store(req, res) {
    const { email, interval, searchPhrase } = req.body;

    const jobs = await agenda.jobs(
      {
        name: 'EbaySearch',
        'data.email': email,
        'data.searchPhrase': searchPhrase,
      },
    );
    if (jobs.length) {
      return res.status(400).json({ error: 'You already have an alert with the same Search Phrase' });
    }

    const job = agenda.create('EbaySearch', {
      email,
      interval,
      searchPhrase,
    });
    job.repeatEvery(`${interval} minutes`);
    await job.save();
    return res.status(200).json({ message: 'Created' });
  }

  async update(req, res) {
    const { id } = req.params;
    const { interval, searchPhrase } = req.body;

    const jobs = await agenda.jobs();
    // eslint-disable-next-line eqeqeq
    const foundJob = jobs.find((job) => job.attrs._id == id);

    if (!foundJob) {
      return res.status(404).json({ error: 'Could not find this alert' });
    }
    if (searchPhrase) {
      foundJob.attrs.data.searchPhrase = searchPhrase;
    }
    if (interval) {
      foundJob.attrs.data.interval = interval;
    }
    foundJob.repeatEvery(`${interval} minutes`);
    await foundJob.save();
    return res.status(200).json(foundJob);
  }

  async delete(req, res) {
    const { id } = req.params;

    const jobs = await agenda.jobs();
    // eslint-disable-next-line eqeqeq
    const foundJob = jobs.find((job) => job.attrs._id == id);

    if (!foundJob) {
      return res.status(404).json({ error: 'Could not find this alert' });
    }

    await foundJob.remove();
    return res.status(200).json({ message: 'Job removed' });
  }
}

export default new AgendaController();
