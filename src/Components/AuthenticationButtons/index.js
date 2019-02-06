import React, { Component } from 'react';
import SignUpButton from '../SignUpButton';
import LogInButton from '../LogInButton';


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
