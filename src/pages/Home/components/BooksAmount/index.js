import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddBookButton from '../AddBookButton';
import styles from './BooksAmount.css';

class BooksAmount extends Component {
    static propTypes = {
        amount: PropTypes.number,
    }
    render() {
        return (
            <div className={styles.container}>
                <p>Today</p>
                <p>{this.props.amount}</p>
                <p>books</p>
                <AddBookButton />
            </div>
        );
    }
}

export default BooksAmount;