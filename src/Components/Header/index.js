import React, { Component } from 'react';
import styles from './Header.scss';
import AuthenticationButtons from '../AuthenticationButtons';
import { JWT_TOKEN } from '../../config';


class Header extends Component {
    state = {
        isAuthorized: false,
        authonticationContent: <AuthenticationButtons />,
    }


    componentDidMount() {
        console.log(!!localStorage[JWT_TOKEN])
        this.setState({
            isAuthorized: !!localStorage[JWT_TOKEN],
        })
        console.log(this.state.isAuthorized)
        if (this.state.isAuthorized) {
            
            this.setState({
                authonticationContent: <div>Вы вошли</div>,
            })
        }
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