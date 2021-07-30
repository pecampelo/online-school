const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');

const port = process.env.PORT || 7001;

app.use(express.json());
app.use(morgan('common')); // logs for debugging
app.use(helmet());




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

app.get('/', (req, res) => {
  res.status(200).send({
    user: 'pete',
    email: 'pedrohcmatheus@gmail.com',
    password: 'lilac',
  });
});
app.get('/favicon.ico', (req, res) => res.status(404));

app.post('/:user', (req, res) => {
  const { user } = req.params;
  const { email } = req.body;

  if (!email) {
    res.status(418).send({ message: 'We need your e-mail' });
  }

  res.send({
    user: `${user}'s email is ${email}`,
  });
});
