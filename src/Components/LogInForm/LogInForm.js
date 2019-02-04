import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import styles from './LogInForm.scss';

class LogInForm extends Component {


    render() {
        return( 
            <Form className={styles.container} action='/user/login' method='post' >
                <h2 className={styles.title}>Log In</h2>
                <Form.Field>
                    <label htmlFor='userName'>User name</label>
                    <input name='userName' type='text'></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='password'>Password</label>
                    <input name='password' type='text'></input>
                </Form.Field>
                <Button type='submit' color='teal'>Log In</Button>
            </Form>
        );
    }
}

export default LogInForm;