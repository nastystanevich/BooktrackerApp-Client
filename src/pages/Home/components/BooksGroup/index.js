import React, { Component } from 'react';
import BookCard from '../BookCard';
import BooksAmount from '../BooksAmount';
import styles from './BooksGroup.scss';
import { API_PORT } from '../../../../config';
import { getBooks } from '../../../../helpers/api';

class BooksGroup extends Component {
    state = {books: ''}

    getMarksCount(marks) {
        return (marks.filter(like => like.like).length);
    }

    componentDidMount() {
        getBooks()
            .then(books => {
                this.setState({books: books});
            });
    }

    createBookCards = (books) => {
        if (books) {
            return books.map(book => {
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
        }
    }

    getBooksAmount = (books) => {
        if (books) {
            return books.length;
        }
    }
    render() {
        const books = this.state.books;
        return(
            <div className={styles.container}>
                <div className={styles.booksContainer}>
                    {this.createBookCards(books)}
                </div>
                <BooksAmount amount={this.getBooksAmount(books)}></BooksAmount>
            </div>
        );
    }
}

export default BooksGroup;
