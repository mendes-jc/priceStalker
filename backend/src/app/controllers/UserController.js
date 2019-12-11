import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email, name } = req.body;
    if (!email || !name) {
      return res.status(400).json({ message: 'Provide a name and an email.' });
    }
    const user = await User.create({
      name,
      email,
    });
    console.log(user);
    return res.status(201).json({ message: 'User created', user });
  }

  async index(req, res) {
    const { email } = req.query;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(200).json(user);
    }
    return res.status(204).json({ message: 'User not found' });
  }
}

export default new UserController();
