import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Comment} from 'semantic-ui-react';
import styles from './BookComments.scss';
import { getComments} from '../../../../helpers/api';
import AddCommentForm from '../AddCommentForm';
import { connect } from 'react-redux';

class BookComments extends Component {
    static propTypes = {
        id: PropTypes.string,
        userLogged: PropTypes.bool,
    }
    state = {
        formIsOpened: false,
        displayStyle: 'hidden',
    };

    componentDidMount() {
        getComments(this.props.id)
            .then(comments => {
                this.setState({comments: comments});
            });
    }

    createComments = (comments) => {
        if (comments) {
            return comments.map(comment =>
                <Comment key={comment._id}>
                    <Comment.Content className={styles.comment}>
                        <Comment.Author className={styles.user}>
                            <a className={styles.user}>
                                {comment.user.username}
                            </a>
                        </Comment.Author>
                        <Comment.Text>
                            <p>{comment.comment}</p>
                        </Comment.Text>
                    </Comment.Content>
                </Comment>);
        }
    }

    openForm = () => {
        if (this.state.formIsOpened) {
            this.setState({
                formIsOpened: false,
                displayStyle: 'hidden',
            });
        } else {
            this.setState({
                formIsOpened: true,
                displayStyle: '',
            });
        }
    }


    render() {
        const comments = this.state.comments;
        const AddCommentButton = <AddCommentButton onClick={(e) => this.openForm(e)}/>;
        const empty = <span></span>;

        return(
            <Comment.Group>
                <div className={styles.header}>
                    <h3>Comments</h3>
                    {this.props.userLogged ? AddCommentButton : empty}
                </div>
                <div className={this.state.displayStyle}>
                    <AddCommentForm bookId={this.props.id}></AddCommentForm>
                </div>
                <div className={styles.wrapper}>
                    { this.createComments(comments) }
                </div>
            </Comment.Group>
        );
    }
}

const mapStateToProps = (state) => ({
    userLogged: state.user.userLogged,
});

export default connect(mapStateToProps)(BookComments);