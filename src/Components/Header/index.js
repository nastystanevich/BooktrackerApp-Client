import React, { Component } from 'react';
import styles from './Header.scss';
import AuthenticationButtons from '../AuthenticationButtons';

class Header extends Component {
    state = {
        isAuthorized: false,
        authonticationContent: <AuthenticationButtons />,
    }

    render() {
        return(
            <div className={styles.container}>
                <h1 className={styles.title}>Booktracker</h1>
                {this.state.authonticationContent}
            </div>
        );
    }
}

export default Header;