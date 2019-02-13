import React, { Component } from 'react';
import SignUpButton from './components/SignUpButton';
import LogInButton from './components/LogInButton';


class AuthenticationButtons extends Component {
    render() {
        return(
            <div>
                <SignUpButton></SignUpButton>
                <LogInButton></LogInButton>
            </div>
        );
    }
}

export default AuthenticationButtons;
