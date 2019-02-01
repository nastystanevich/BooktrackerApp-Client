import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Comment} from 'semantic-ui-react';

class BookComments extends Component {
    constructor(props) {
        super(props);
        //this.commentsArray = props.comments;
        this.state = {
            comments: Array,
        };
    }
    /*componentDidMount() {
        const comments = this.props.comments.map(comment => (
            <Comment key={comment._id}>
                <Comment.Content>
                    <Comment.Author as='a'>
                        {comment.user}
                    </Comment.Author>
                    <Comment.Text>
                        <p>{comment.coment}</p>
                    </Comment.Text>
                </Comment.Content>
            </Comment>
        ));
        this.setState({comments: comments});
    }
*/
    render() {
        return(
            <Comment.Group>
                {this.state.commentCards}
            </Comment.Group>
        );
    }
}

BookComments.propTypes = {
    //comments: PropTypes.array,
};

export default BookComments;