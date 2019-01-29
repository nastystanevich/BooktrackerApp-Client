import React, {Component} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react'
import './BookCard.css';

class BookCard extends Component {
   constructor(props) {
        super(props);
        this.title = props.title;
        this.author = props.author;
        this.cover = props.cover;
    }

    render() {
        return (
            <Card className="book-card">
                <Image src={this.cover} />
                <Card.Content>
                    <Card.Header>{this.title}</Card.Header>
                    <Card.Meta>{this.author}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <a>
                    <Icon name='like' color="teal"/>
                        Likes
                    </a>
                </Card.Content>
            </Card>
        );
    }
}

export default BookCard;