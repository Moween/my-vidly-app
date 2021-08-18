import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Select from "./Select";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
    };
  }
  validateForm = () => {
    const options = {
      abortEarly: false,
    };
    const errors = {};
    // Validating Form with Joi
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) {
      return null;
    } else {
      error.details.map((item) => (errors[item.path] = item.message));
      return errors;
    }

    // Validating form with pure JS
    // const { data } = this.state;
    // if (data.email.trim() === "") {
    //   errors.email = "email is required";
    // }

    // if (data.password.trim() === "") {
    //   errors.password = "password is required";
    // }
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  //Validates a single input field
  handleValidateProperty = ({ name, value }) => {
    // Validating with Joi
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema);
    return !error ? null : error.details[0].message;

    // Validating form with pure JS
    // if (name === "email" || name === "password") {
    //   if (value.trim() === "") {
    //     return `${name} is required`;
    //   }
    // }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.handleValidateProperty(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }

    this.doSubmit();
  };

  renderInputField(name, label, type = "text") {
    const { errors } = this.state;
    return (
      <Input
        name={name}
        type={type}
        label={label}
        handleChange={this.handleChange}
        errors={errors[name]}
      />
    );
  }

  renderSelect(name, label, genres) {
    const { errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        handleChange={this.handleChange}
        errors={errors[name]}
        genres={genres}
      />
    );
  }

  renderButton(label) {
    return (
      <button
        disabled={this.validateForm() ? true : false}
        type="submit"
        className="btn w-50 btn-primary"
      >
        {label}
      </button>
    );
  }
}

export default Form;
