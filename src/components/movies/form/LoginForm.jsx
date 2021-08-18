import React from 'react';
import Joi from 'joi-browser';
import Form from './Form';

class LoginForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      data: { email: "", password: "" },
      errors: {},
    };

    this.schema = {
      email: Joi.string().required().label('Email'),
      password: Joi.string().required().label('Password'),
    };
  };

  doSubmit() {
    console.log("submitted");    
  }

  render() {
    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField('email', 'Email', 'email')}
          {this.renderInputField('password', 'Password', 'password')}          
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
