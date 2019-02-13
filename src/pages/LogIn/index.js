import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import '../../styles/form.scss';
import { logIn } from '../../helpers/api';
import { JWT_TOKEN } from '../../config';

import { connect } from 'react-redux';
import { setUserIsLoggedIn, fetchUser } from '../../actions';
import PropTypes from 'prop-types';

class LogInForm extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
    }
    state = {
        username: '',
        password: '',
        usernameValid: false,
        passwordValid: false,
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value}, () => {
            this.validateField(name, value);
        });
    }

    validateField = (fieldName, value) => {
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        if (fieldName === 'username') {
            usernameValid = value.match(/\s*[а-яА-ЯёЁa-zA-Z0-9]+/);
        }
        else {
            passwordValid = value.match(/\s*[а-яА-ЯёЁa-zA-Z0-9]+/);
        }

        this.setState({
            usernameValid: usernameValid,
            passwordValid: passwordValid,
        },
        this.validateForm);
    }

    validateForm = () => {
        this.setState({
            formValid:
                this.state.usernameValid &&
                this.state.passwordValid,
        });
    }

    clearField = () => {
        this.setState({
            username: '',
            password: '',
            secondPassword: '',
            validatineStyle: '',
            usernameValid: false,
            passwordValid: false,
            errorMessage: '',
        },
        this.validateForm);
    }

    handleSubmit = () => {
        logIn(this.state.username, this.state.password)
            .then(res => {
                if (res.message) {
                    this.setState({errorMessage: res.message.message});
                    localStorage.removeItem(JWT_TOKEN);
                    this.props.dispatch(setUserIsLoggedIn(false));
                }
                else {
                    this.setState({errorMessage: ''});
                    localStorage.setItem(JWT_TOKEN, res.token);
                    this.clearField();
                    this.props.dispatch(setUserIsLoggedIn(true));
                    this.props.dispatch(fetchUser());
                }
            });

    };

    render() {
        return(
            <Form className='form-container' onSubmit={this.handleSubmit}>
                <h2 className='form-title'>Log In</h2>
                <h4 className='form-error'>{this.state.errorMessage}</h4>
                <Form.Field>
                    <label htmlFor='userName'>User name</label>
                    <input name='username' type='text' value={this.state.username} onChange={this.handleChange}></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='password'>Password</label>
                    <input name='password' type='password' value={this.state.password} onChange={this.handleChange}></input>
                </Form.Field>
                <Button type='submit' color='teal' disabled={!this.state.formValid}>Log In</Button>
            </Form>
        );
    }
}

export default connect()(LogInForm);