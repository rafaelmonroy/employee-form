const express = require('express');
const employeeRouter = express.Router();
const Employee = require('../model/Employee');

//CRUD

//read
employeeRouter.get('/', (req, res) => {
  Employee.find({}, err => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: 'unable to get employee',
          msgErros: true
        }
      });
    else res.status(200).json({ response });
  });
});

//create

employeeRouter.post('/', (req, res) => {
  const employee = new Employee(req.body);
  employee.save((err, document) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: 'unable to add employee',
          msgErros: true
        }
      });
    else
      res.status(200).json({
        message: {
          msgBody: 'succesfully added employee',
          msgError: false
        }
      });
  });
});

//delete
employeeRouter.delete('/:id', (req, res) => {
  Employee.findByIdAndDelete(req.params.id, err => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: 'unable to delete employee',
          msgErros: true
        }
      });
    else
      res.status(200).json({
        message: {
          msgBody: 'succesfully deleted employee',
          msgError: false
        }
      });
  });
});

//update
employeeRouter.put('/:id', (req, res) => {
  Employee.findOneAndUpdate(
    req.params.id,
    req,
    body,
    { runValidators: true },
    (err, response) => {
      if (err)
        res.status(500).json({
          message: {
            msgBody: 'unable to update employee',
            msgErros: true
          }
        });
      else
        res.status(200).json({
          message: {
            msgBody: 'succesfully updated employee',
            msgError: false
          }
        });
    }
  );
});

module.exports = employeeRouter;
