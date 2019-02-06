import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Comment} from 'semantic-ui-react';
import styles from './BookComments.scss';
import {getBook} from '../../../../api';

class BookComments extends Component {
    state = {};

    componentDidMount() {
        getBook(this.props.id)
            .then((book) => {
                if (book.comments.length > 1) {
                    const comments = book.comments.map(comment => (
                        <div key={comment._id} className={styles.comment}>
                            <Comment>
                                <Comment.Content>
                                    <Comment.Author className={styles.user}>
                                        <a className={styles.user}>
                                            {comment.user}
                                        </a>
                                    </Comment.Author>
                                    <Comment.Text>
                                        <p>{comment.comment}</p>
                                    </Comment.Text>
                                </Comment.Content>
                            </Comment>
                        </div>
                    ));
                    this.setState({comments: comments});
                }
                else {
                    this.setState({comments: 'no comments'});
                }
            });
    }

    render() {
        return(
            <Comment.Group>
                {this.state.comments}
            </Comment.Group>
        );
    }
}

BookComments.propTypes = {
    //comments: PropTypes.array,
    id: PropTypes.string,
};

export default BookComments;