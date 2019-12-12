import Mail from '../lib/Mail';

class AnswerMail {
  get key() {
    return 'AlertMail';
  }

  async handle({ data }) {
    const { user, products, searchPhrase } = data;

    return Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: `Look at these prices for '${searchPhrase}!'`,
      template: 'priceAlert',
      context: {
        name: user.name,
        products,
        searchPhrase,
      },
    });
  }
}

export default new AnswerMail();
