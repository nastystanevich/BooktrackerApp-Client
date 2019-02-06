import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

class LogInButton extends Component {
    render() {
        return(
            <Link to='/auth/login'>
                <Button inverted content="Log In" color="pink"></Button>
            </Link>
        );
    }
}

export default LogInButton;