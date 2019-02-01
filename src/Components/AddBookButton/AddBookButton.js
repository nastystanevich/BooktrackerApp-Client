import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import styles from './AddBookButton.css';

class AddBookButton extends Component {
    render() {
        return (
            <Link to='/addbook' className={styles.white}>
                <Button inverted color="white">
                    Add new one
                </Button>
            </Link>
        );
    }
}

export default AddBookButton;