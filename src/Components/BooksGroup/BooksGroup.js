import React, {Component} from 'react';
import {Card} from 'semantic-ui-react'
import BookCard from '../BookCard/BookCard'
import './BooksGroup.css';

class BooksGroup extends Component {
    constructor(){
        super();
        this.state = {
            bookCards: Array
        };
    };
    componentDidMount() {
        const url = "http://localhost:3002/api/books";
        fetch(url)
        .then((response) => response.json())
        .then((books) => {
            this.setState({isLoaded: true});
            const bookCards = books.map(book => {
                return (
                    <BookCard 
                        key={book._id}
                        title={book.title}
                        author={book.author}
                        cover={book.cover}
                    ></BookCard>)
            });
            this.setState({bookCards: bookCards});
        })
        .catch(error => {
            console.log(error);
        });

    }
   

    render() {
        return (
            <Card.Group itemsPerRow={5} className="card-group">
                {this.state.bookCards}
            </Card.Group>
    );
    }
}

export default BooksGroup;
