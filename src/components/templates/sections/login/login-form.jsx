import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../../../actions';

const limits = {
  email: {
    min: 3,
    max: 30,
  },
  password: {
    min: 3,
    max: 30,
  },
};

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit} className="login__form">
        <input
          type="email"
          value={this.state.email}
          onChange = {this.handleChange('email')}
          className={`login__input ${this.getClassName('email')}`}
          placeholder='Введите e-mail'
        />
        <input
          type="password"
          value={this.state.password}
          onChange = {this.handleChange('password')}
          className={`login__input ${this.getClassName('password')}`}
          placeholder='Введите пароль'
        />
        <button type='submit' className="login__submit">Вход</button>
        <Link to="/cabinet" className="login__forget-password">Забыли пароль</Link>
        <Link to='/signup' className="login__forget-password">Sign up</Link>
      </form>
    );
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };

    this.props.login(data, this.state.type);
    this.setState({
      email: '',
      password: '',
    });
  }

  getClassName = (type) => {
    if (this.state[type].length && this.state[type].length < limits[type].min) {
      return 'form-input__error';
    } else {
      return '';
    }
  }

  handleChange = (type) => ev => {
    const { value } = ev.target;
    if (value.length > limits[type].max) return;
    this.setState({
      [type]: value,
    });
  };
}

export default connect((state) => {
  return {
    authenticated: state.auth.authenticated,
  };
}, { login })(LoginForm);
