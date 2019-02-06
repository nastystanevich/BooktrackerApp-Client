import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';


class SignUpButton extends Component {
    render() {
        return(
            <Link to='/auth/signup'>
                <Button inverted content="Sign Up" color="white"></Button>
            </Link>
        );
    }
}

export default SignUpButton;