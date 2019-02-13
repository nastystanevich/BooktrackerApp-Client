import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { postComment } from '../../../../helpers/api';
import { connect } from 'react-redux';

class AddCommentForm extends Component {
    static propTypes = {
        bookId: PropTypes.string,
        userId: PropTypes.string,
    }
    state = {
        comment: '',
        formValid: false,
    }
    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value}, () => {
            this.validateForm();
        });
    }

    validateForm = () => {
        if (this.state.comment !== '') {
            this.setState({formValid: true});
        }
        else {
            this.setState({formValid: false});
        }
    }

    clearForm = () => {
        this.setState({
            comment: '',
            formValid: false,
        });
    }

    handleSubmit = () => {
        postComment(
            this.props.bookId,
            this.state.comment,
            this.props.userId
        ).then(this.clearForm());
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <input name='comment' type='text' value={this.state.comment} onChange={this.handleChange} placeholder='enter a comment here'></input>
                    <Button type='submit' color='teal' disabled={!this.state.formValid}>Comment</Button>
                </Form.Field>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    userId: state.user.userData._id,
});

export default connect(mapStateToProps)(AddCommentForm);