import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './AddCommentButton.scss';
import PropTypes from 'prop-types';

class AddCommentButton extends Component {
    static propTypes = {
        onClick: PropTypes.func,
    }
    render() {
        return (
            <div className={styles.button} onClick={this.props.onClick}>
                <Icon color='pink' name='add' />
            </div>
        );
    }
}

export default AddCommentButton;