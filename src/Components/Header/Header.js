import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import styles from './Header.scss';

class LogInButton extends Component {
    render() {
        return(
            <Button inverted content="Log In" color="pink"></Button>
        );
    }
}
class SignUpButton extends Component {
    render() {
        return(
            <Button inverted content="Sign Up" color="white"></Button>
        );
    }
}

class Header extends Component {

    render() {
        return(
            <div className={styles.container}>
                <h1 className={styles.title}>Booktracker</h1>
                <div>
                    <SignUpButton />
                    <LogInButton />
                </div>
            </div>
        );
    }
}

export default Header;