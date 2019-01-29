import React, { Component } from 'react';
import {Grid, Button} from 'semantic-ui-react'
import './Header.scss';

class LogInButton extends Component {
    render() {
        return(
            <Button inverted content="Log In" color="white"></Button>
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

export class Header extends Component {

    render() {
        return(
            <Grid columns={2} className="header">
                <Grid.Column>
                   <h1 className="title">Booktracker</h1>  
                </Grid.Column>
                <Grid.Column >
                    <Button.Group floated="right">
                        <LogInButton />
                        <SignUpButton />
                    </Button.Group>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Header;