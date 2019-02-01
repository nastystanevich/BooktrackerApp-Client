import React, {Component} from 'react';
import BookCard from '../BookCard/BookCard';
import BooksAmount from '../BooksAmount/BooksAmount';
import styles from './BooksGroup.scss';


class BooksGroup extends Component {
    constructor() {
        super();
        this.state = {
            bookCards: Array,
        };
    }

    componentDidMount() {
        const url = 'http://localhost:3002/api/books';
        fetch(url)
            .then((response) => response.json())
            .then((books) => {
                const bookCards = books.map(book => (
                    <BookCard
                        key={book._id}
                        id={book._id}
                        title={book.title}
                        author={book.author}
                        cover={book.cover}
                        likes={book.likes.length}
                    ></BookCard>
                ));
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
