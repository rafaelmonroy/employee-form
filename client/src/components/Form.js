import React from 'react';
import Input from './Input';

const Form = props => {
  return (
    <form onSubmit={props.handler}>
      <h4>{props.isEditForm ? 'Editing Employee: ' : 'Add Employee: '}</h4>
      <div className="form-group">
        <Input
          name="firstName"
          placeholder="Enter first name"
          labelName="First Name: "
          handleChange={props.handleChange}
          value={props.employee.firstName}
        />
        <Input
          name="lasttName"
          placeholder="Enter last name"
          labelName="Last Name: "
          handleChange={props.handleChange}
          value={props.employee.lasttName}
        />
        <Input
          name="job"
          placeholder="Enter job"
          labelName="Job: "
          handleChange={props.handleChange}
          value={props.employee.job}
        />
        <Input
          name="salary"
          placeholder="Enter salary"
          labelName="Salary: "
          handleChange={props.handleChange}
          value={props.employee.salary}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
