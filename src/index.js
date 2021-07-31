const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const middlewares = require('./middlewares');

const port = process.env.PORT || 7001;

app.use(express.json());
app.use(morgan('common')); // logs for debugging
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:6001',
}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
});

app.use(middlewares.notFoundHandler);
app.use(middlewares.errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

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
