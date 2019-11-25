const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//routes
const employee = require('./routes/employee');
app.use('/employee', employee);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.send(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const uri = process.env.mongodb || 'mongodb://localhost:27017/employee-app';
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  },
  err => {
    if (err) {
      process.exit(1);
      console.log('unable to connect to the db');
    } else console.log('successfully connected to th db');
  }
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('app is running...');
});
