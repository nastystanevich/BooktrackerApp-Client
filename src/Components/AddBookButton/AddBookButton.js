import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import styles from './AddBookButton.css';

class AddBookButton extends Component {

    render() {
        return (
            <Button inverted color="white">
                <Link to='/addbook' className={styles.white}>
                    Add new one
                </Link> 
            </Button>
        );
    }
}

export default AddBookButton;