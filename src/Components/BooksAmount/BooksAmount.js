import React, {Component} from 'react';
import AddBookButton from '../AddBookButton/AddBookButton'
import styles from './BooksAmount.css';

class BooksAmount extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>Today</p>
                <p className={styles.amount}>{this.props.amount}</p>
                <p>books</p>
                <AddBookButton />
            </div>
            
        );
    }
}

export default BooksAmount;