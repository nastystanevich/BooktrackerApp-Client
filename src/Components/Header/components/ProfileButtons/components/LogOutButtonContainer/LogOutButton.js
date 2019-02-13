import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class LogOutButton extends Component {
    static propTypes = {
        onLogOutClick: PropTypes.func,
    }

    render() {
        return(
            <Button inverted content="Log Out" color="pink"
                onClick={() => this.props.onLogOutClick()}>
            </Button>
        );
    }
}

export default LogOutButton;