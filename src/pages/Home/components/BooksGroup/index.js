import React, {Component} from 'react';
import BookCard from '../BookCard';
import BooksAmount from '../BooksAmount';
import styles from './BooksGroup.scss';
import {getBooks} from '../../../../api';
import {API_PORT} from '../../../../config';

class BooksGroup extends Component {
    state = {bookCards: Array}

    getMarksCount(marks) {
        return (marks.filter(like => like.like).length);
    }

    componentDidMount() {
        getBooks()
            .then(books => {
                const bookCards = books.map(book => {
                    const backendUrl = `http://localhost:${API_PORT}/`;
                    book.cover = backendUrl + book.cover;

                    return <BookCard
                        key={book._id}
                        id={book._id}
                        title={book.title}
                        author={book.author}
                        cover={book.cover}
                        likes={this.getMarksCount(book.likes)}
                        dislikes={this.getMarksCount(book.dislikes)}
                    ></BookCard>;
                });
                this.setState({bookCards: bookCards});
            });
    }

    render() {
        return(
            <div className={styles.container}>
                <div className={styles.booksContainer}>
                    {this.state.bookCards}
                </div>
                <BooksAmount amount={this.state.bookCards.length}></BooksAmount>
            </div>
        );
    }
}

export default BooksGroup;
