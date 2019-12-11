"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Mail = require('../lib/Mail'); var _Mail2 = _interopRequireDefault(_Mail);

class AnswerMail {
  get key() {
    return 'AlertMail';
  }

  async handle({ data }) {
    const { user, products, searchPhrase } = data;

    return _Mail2.default.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: `Look at those prices for ${searchPhrase}!`,
      template: 'priceAlert',
      context: {
        name: user.name,
        products,
        searchPhrase,
      },
    });
  }
}

exports. default = new AnswerMail();
