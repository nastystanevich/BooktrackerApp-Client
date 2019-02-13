import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Rating } from 'semantic-ui-react';
import BookDetailsButton from '../BookDetailsButton';
import styles from './BookCard.scss';

class BookCard extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        cover: PropTypes.string,
        likes: PropTypes.number,
        dislikes: PropTypes.number,
        userLogged: PropTypes.bool,
    }

    render() {
        const {id, title, author, cover, likes, dislikes, userLogged} = this.props;
        const likeButton = <Rating icon='heart' name='like' size='huge' onRate={this.handleChange}></Rating>;
        const emptyObject = <span></span>;
        return(
            <div className={styles.card}>
                <div className={styles['image-container']}>
                    <img className={styles.image} src={cover} alt="oops"/>
                    <div className={styles['image-overlay']}>
                        <BookDetailsButton id={id}></BookDetailsButton>
                    </div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>
                        {title}
                    </h3>
                    <span className={styles.author}>{author}</span>

                </div>
                <div className={styles.extra}>
                    <div className={styles.icons}>
                        <Icon name="user" color="teal">

                        </Icon>
                        <Icon name="like" color="pink">
                            {likes}
                        </Icon>
                        <Icon name="like" color='grey'>
                            {dislikes}
                        </Icon>
                    </div>
                    {userLogged ? likeButton : emptyObject}
                </div>
            </div>
        );
    }
}

export default BookCard;