import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Comment} from 'semantic-ui-react';
import styles from './BookComments.scss';
import {API_PORT} from '../../config';

class BookComments extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    componentDidMount() {
        const url = `http://localhost:${API_PORT}/api/books/${this.props.id}`;
        fetch(url)
            .then((response) => response.json())
            .then((book) => {
                if (book.comments.length > 2) {
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