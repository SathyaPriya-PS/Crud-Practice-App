const User = require('../Models/User');

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const userExist = await User.findOne({ username });
  if (userExist) return res.status(400).send('User exists');
  await User.create({ username, password });
  res.send('User created');
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.send('Login success');
  } else {
    res.status(400).send('Invalid credentials');
  }
};
