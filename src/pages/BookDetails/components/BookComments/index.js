import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Comment} from 'semantic-ui-react';
import styles from './BookComments.scss';
import {getBook} from '../../../../api';

class BookComments extends Component {
    static propTypes = {
        id: PropTypes.string,
    }
    state = {};

    componentDidMount() {
        getBook(this.props.id)
            .then((book) => {
                this.setState({comments: book.comments});
            });
    }

    createComments = (comments) => {
        if (comments) {
            return comments.map(comment => (
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
        }
    }

    render() {
        return(
            <Comment.Group>
                { this.createComments(this.state.comments) }
            </Comment.Group>
        );
    }
}

export default BookComments;