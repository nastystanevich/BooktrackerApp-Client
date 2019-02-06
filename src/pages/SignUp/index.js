import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import '../../styles/form.scss';
import {signUp} from '../../api';

class SignUpForm extends Component {
    state = {
        username: '',
        password: '',
        secondPassword: '',
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

        switch(fieldName) {
        case 'username':
            usernameValid = value.match(/\s*[а-яА-ЯёЁa-zA-Z0-9]+/);
            break;
        case 'password':
            passwordValid = this.state.password === this.state.secondPassword;
            break;
        case 'secondPassword':
            passwordValid = this.state.password === this.state.secondPassword;
            break;
        default:
            break;
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

    handleSubmit = () => {
        if (this.state.password === this.state.secondPassword) {
            signUp(this.state.username, this.state.password);
        }
        else {
            this.setState({validatineStyle: 'invalid'});
        }
        this.clearField();
    };

    render() {
        return(
            <Form className='form-container' onSubmit={this.handleSubmit}>
                <h2 className='form-title'>Sign Up</h2>
                <Form.Field>
                    <label htmlFor='userName'>User name</label>
                    <input name='username' type='text' value={this.state.username} onChange={this.handleChange}></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='password'>Password</label>
                    <input name='password' type='password' value={this.state.password} onChange={this.handleChange}></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='password'>Confirm password</label>
                    <input name='secondPassword' type='password' value={this.state.secondPassword} onChange={this.handleChange}></input>
                </Form.Field>
                <Button type='submit' color='teal' disabled={!this.state.formValid}>Sign Up</Button>
            </Form>
        );
    }
}

export default SignUpForm;