import Bull from 'bull';
import redisConfig from '../../config/redis';

import AlertMail from '../jobs/AlertMail';

const bull = new Bull(AlertMail.key, {
  redis: redisConfig,
  limiter: {
    max: 2,
    duration: 1000,
  },
});

bull.process(AlertMail.key, AlertMail.handle);

export default bull;
