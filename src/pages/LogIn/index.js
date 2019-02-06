import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import '../../styles/form.scss';
import {logIn} from '../../api';

class LogInForm extends Component {
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
        });
    }

    handleSubmit = () => logIn(this.state.username, this.state.password);

    render() {
        return(
            <Form className='form-container' onSubmit={this.handleSubmit}>
                <h2 className='form-title'>Log In</h2>
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

export default LogInForm;