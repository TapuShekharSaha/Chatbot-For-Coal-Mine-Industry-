const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.json());

const users = {
  user1: 'password1',
  user2: 'password2'
};

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users[username] && users[username] === password) {
    const token = jwt.sign({ username }, 'secret-key', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));
