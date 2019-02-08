import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LogOutButton from '../../containers/LogOutButton';
import OpenProfileButton from '../OpenProfileButton/index';


class ProfileButtons extends Component {
    static propTypes = {
        username: PropTypes.string,
    }

    render() {
        return(
            <div>
                <OpenProfileButton value={this.props.username}></OpenProfileButton>
                <LogOutButton></LogOutButton>
            </div>
        );
    }
}

export default ProfileButtons;