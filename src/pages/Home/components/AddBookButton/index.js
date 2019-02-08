import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './AddBookButton.scss';

class AddBookButton extends Component {
    render() {
        return (
            <Link to='/addbook' className={styles.white}>
                <Button animated='fade' inverted color="white">
                    <Button.Content visible>
                        Add new one
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon color='pink' name='add' />
                    </Button.Content>
                </Button>
            </Link>
        );
    }
}

export default AddBookButton;