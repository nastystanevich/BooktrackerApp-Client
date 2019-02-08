import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { setUserIsLoggedIn } from '../actions';
import { connect } from 'react-redux';

class LogOutButton extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
    }

    render() {
        return(
            <Button inverted content="Log Out" color="pink"
                onClick={() => this.props.dispatch(setUserIsLoggedIn(false))}>
            </Button>
        );
    }
}

export default connect()(LogOutButton);