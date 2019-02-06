import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddBookButton from '../AddBookButton';
import styles from './BooksAmount.css';

class BooksAmount extends Component {
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

BooksAmount.propTypes = {
    amount: PropTypes.number,
};

export default BooksAmount;