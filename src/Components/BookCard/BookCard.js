import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import BookDetailsButton from '../BookDetailsButton/BookDetailsButton';
import styles from './BookCard.scss';

class BookCard extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.title = props.title;
        this.author = props.author;
        this.cover = props.cover;
        this.likes = props.likes;
        this.dislikes = props.dislikes;
    }

    render() {
        return(
            <div className={styles.card}>
                <div className={styles['image-container']}>
                    <img className={styles.image} src={this.cover} alt="oops"/>
                    <div className={styles['image-overlay']}>
                        <BookDetailsButton id={this.id}></BookDetailsButton>
                    </div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>
                        {this.title}
                    </h3>
                    <span className={styles.author}>{this.author}</span>

                </div>
                <div className={styles.extra}>
                    <Icon name="user" color="teal">

                    </Icon>
                    <Icon name="like" color="pink">
                        {this.likes}
                    </Icon>
                    <Icon name="like" color='grey'>
                        {this.dislikes}
                    </Icon>
                </div>
            </div>
        );
    }
}

BookCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    cover: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
};

export default BookCard;