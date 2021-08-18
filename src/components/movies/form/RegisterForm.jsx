import React from "react";
import Form from "./Form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: "",
        password: "",
        username: "",
        year: "",
      },
      errors: {},
    };

    this.schema = {
      email: Joi.string().required().label("Email"),
      password: Joi.string()
        // .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .label("Password"),
      username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .label("Username"),
      year: Joi.number()
        .integer()
        .min(1900)
        .max(2013)
        .required()
        .label("Date-Of-Birth"),
    };
  }

  doSubmit() {
    console.log("submitted");
  }

  render() {
    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("email", "Email", "email")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderInputField("username", "Username")}
          {this.renderInputField("year", "DOB", "year")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
