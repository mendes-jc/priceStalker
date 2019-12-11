import api from '../services/api';
// eslint-disable-next-line import/no-cycle
import agenda from '../lib/Agenda';
import bull from '../lib/Queue';
import User from '../models/User';

export default {
  key: 'EbaySearch',
  async handle(job) {
    // Com base nos dados do Job, busca pelos produtos no E-bay
    // Após a busca, envia o e-mail para o usuário
    const { searchPhrase, email } = job.attrs.data;

    const response = await api.get(`/buy/browse/v1/item_summary/search?q=${searchPhrase}&sort=price&limit=3`,
      {
        headers: {
          Authorization: `Bearer ${agenda.token}`,
          'Content-Type': 'application/json',
        },
      });

    if (response.status === 401) {
      agenda.renewToken();
      return new Error(response.statusText);
    }
    const { itemSummaries } = response.data;
    const products = itemSummaries.map(({
      title, price, image, itemWebUrl,
    }) => ({
      title,
      price: `${price.value} ${price.currency}`,
      image: image && image.imageUrl,
      url: itemWebUrl,
    }));

    const user = await User.findOne({ email });
    bull.add('AlertMail', {
      user: {
        name: user ? user.name : email,
        email,
      },
      searchPhrase,
      products,
    });
    return null;
  },
};
