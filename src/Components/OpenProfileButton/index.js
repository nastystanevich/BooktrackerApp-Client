import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OpenProfileButton.scss';

class OpenProfileButton extends Component {
    static propTypes = {
        value: PropTypes.string,
    }

    render() {
        return(
            <Link to='/user/profile' className={styles.link}>
                <span>
                    {this.props.value}
                </span>
            </Link>
        );
    }
}

export default OpenProfileButton;