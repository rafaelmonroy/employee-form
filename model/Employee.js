const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  job: {
    type: String,
    require: true
  },
  salary: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
