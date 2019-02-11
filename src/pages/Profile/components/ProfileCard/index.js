import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileCard.scss';
import {Icon} from 'semantic-ui-react';

class ProfileCard extends Component {
    static propTypes = {
        username: PropTypes.string,
    }

    render() {
        const { username } = this.props;
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                    <Icon name="user" color='pink'></Icon>
                    <h2>{username}</h2>
                </div>
            </div>
        );
    }
}

export default ProfileCard;