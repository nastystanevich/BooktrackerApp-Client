import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import styles from './SignUpForm.scss';

class SignUpForm extends Component {

    render() {
        return(
            <Form className={styles.container}>
                <Form.Field>
                    <label htmlFor='userName'>User name</label>
                    <input name='userName' type='text'></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='password'>Password</label>
                    <input name='password' type='text'></input>
                </Form.Field>
                <Button type='submit' color='teal'>Sign Up</Button>
            </Form>
        );
    }
}

export default SignUpForm;