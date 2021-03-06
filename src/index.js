const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const db = require('./db');

require('dotenv').config({ path:'./.env'});
const middlewares = require('./middlewares');
const logs = require('./api/logs');


app.use(express.json());
app.use(morgan('common')); // logs for debugging
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

// configure database connection
db.connectDatabase();


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
});

app.use('/api/logs', logs);

app.use(middlewares.notFoundHandler);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

