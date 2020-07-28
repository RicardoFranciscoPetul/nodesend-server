const express = require('express');
const connectDB = require('./config/database');

const app = express();

connectDB();

const port = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/users', require('./routes/users'));

app.listen(port, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(`Listen in port ${port}`);
});
