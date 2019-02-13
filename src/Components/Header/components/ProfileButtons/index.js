import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenProfileButton from './components/OpenProfileButton';
import LogOutButtonContainer from './components/LogOutButtonContainer';


class ProfileButtons extends Component {
    static propTypes = {
        username: PropTypes.string,
    }

    render() {
        return(
            <div>
                <OpenProfileButton value={this.props.username}></OpenProfileButton>
                <LogOutButtonContainer></LogOutButtonContainer>
            </div>
        );
    }
}

export default ProfileButtons;