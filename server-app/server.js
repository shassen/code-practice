const express     = require('express');
const app         = express();
const path        = require('path');
const logger      = require('morgan');
const bodyParser  = require('body-parser');
const cors        = require('cors');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// set up routes here
// const userRouter = require('./routers/userRoutes');
// app.use('/users', userRouter);


// set up port for server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server is up and listening on port: ${PORT}`);
});


// test if server is active
app.get('/dev', (req, res) => {
  console.log('new request from:')
  res.send({ message: 'Server test area' });
});





