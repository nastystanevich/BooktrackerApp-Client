import React, { Component } from 'react';
import styles from './Header.scss';
import AuthenticationButtons from './components/AuthenticationButtons';
import PropTypes from 'prop-types';
import ProfileButtons from './components/ProfileButtons';

class Header extends Component {
    static propTypes = {
        userLogged: PropTypes.bool,
        username: PropTypes.string,
    }

    render() {
        return(
            <div className={styles.container}>
                <h1 className={styles.title}>Booktracker</h1>
                {this.props.userLogged ? <ProfileButtons username={this.props.username}/> : <AuthenticationButtons />}
            </div>
        );
    }
}

export default Header;