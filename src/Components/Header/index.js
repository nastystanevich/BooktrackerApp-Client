import React, { Component } from 'react';
import styles from './Header.scss';
//import AuthenticationButtons from '../AuthenticationButtons';
import someContainer from '../../containers/someContainer';

class Header extends Component {
    state = {
        isAuthorized: false,
        //authonticationContent: <AuthenticationButtons />,
        authonticationContent: <someContainer />,
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