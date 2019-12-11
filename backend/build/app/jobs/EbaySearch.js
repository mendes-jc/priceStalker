"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _api = require('../services/api'); var _api2 = _interopRequireDefault(_api);
var _Agenda = require('../lib/Agenda'); var _Agenda2 = _interopRequireDefault(_Agenda);

exports. default = {
  key: 'EbaySearch',
  async handle(job) {
    // Com base nos dados do Job, busca pelos produtos no E-bay
    // Após a busca, envia o e-mail para o usuário
    const { searchPhrase, email } = job.attrs.data;

    const response = await _api2.default.get(`/buy/browse/v1/item_summary/search?q=${searchPhrase}&sort=price&limit=3`,
      {
        headers: {
          Authorization: `Bearer ${_Agenda2.default.token}`,
          'Content-Type': 'application/json',
        },
      });
    const { itemSummaries } = response.data;
    const products = itemSummaries.map(({
      title, price, image, itemWebUrl,
    }) => ({
      title,
      price: `${price.value} ${price.currency}`,
      image: image.imageUrl,
      url: itemWebUrl,
    }));
    console.log(products);
    // Queue.add('AlertMail', {
    //   user: {
    //     name: email,
    //     email,
    //   },
    //   searchPhrase,
    //   products,
    // });
  },
};
