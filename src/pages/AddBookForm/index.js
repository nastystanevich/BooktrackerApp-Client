import React, {Component} from 'react';
import {Button, Form, Rating} from 'semantic-ui-react';
import styles from './AddBookForm.scss';
import {postBook} from '../../api';
import { connect } from 'react-redux';

class AddBookForm extends Component {
    coverFile = React.createRef();
    state = {
        titleValid: false,
        authorValid: false,
        publishedValid: false,
        formValid: false,
    }

    handleChange = (event, rating) => {
        const target = event.target;
        let value = null;
        switch (target.type) {
        case 'checkbox':
            value = target.checked;
            break;
        case 'file':
            value = target.files[0];
            break;
        default:
            value = target.value;
            break;
        }
        if(rating) {
            value = !!rating.rating;
        }

        const name = target.name || rating.name;
        this.setState({
            [name]: value}, () => {
            this.validateField(name, value);
        });
    }

    validateField = (fieldName, value) => {
        let titleValid = this.state.titleValid;
        let authorValid = this.state.authorValid;
        let publishedValid = this.state.publishedValid;
        //let coverValid = this.state.coverValid;

        switch(fieldName) {
        case 'title':
            titleValid = value.match(/\s*[а-яА-ЯёЁa-zA-Z0-9]+/);
            break;
        case 'author':
            authorValid = value.match(/\s*[а-яА-ЯёЁa-zA-Z]+/i);
            break;
        case 'published':
            publishedValid = value.match(/^[1-9][0-9]{3}$/);
            break;
        case 'cover':
            //coverValid = value.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm);
            break;
        default:
            break;
        }

        this.setState({
            titleValid: titleValid,
            authorValid: authorValid,
            publishedValid: publishedValid,
            //coverValid: coverValid,
        },
        this.validateForm);
    }

    validateForm = () => {
        this.setState({
            formValid:
                this.state.titleValid &&
                this.state.authorValid &&
                this.state.publishedValid,
            //this.state.coverValid,
        });
    }

    handleResetClick = () => {
        this.setState({
            title: '',
            author: '',
            published: '',
            cover: '',
            comment: '',
            like: false,
            titleValid: false,
            authorValid: false,
            publishedValid: false,
            coverValid: false,
            formValid: false,
        });
    }

    handleSubmit = () => {
        const queryBody = new FormData();
        for (const key in this.state) {
            queryBody.append(key, this.state[key]);
        }

        //queryBody.append(user, this.props.state)

        postBook(queryBody);
        this.handleResetClick();
    }

    render() {
        return(
            <Form className={styles.container} onSubmit={this.handleSubmit}>
                <h2 className={styles.title}>Add New Book</h2>
                <Form.Field>
                    <label htmlFor='title'>Book title</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} placeholder='Title' />
                </Form.Field>
                <Form.Field>
                    <label htmlFor='author'>Author</label>
                    <input type='text' name='author' value={this.state.author} onChange={this.handleChange} placeholder='Author' />
                </Form.Field>
                <Form.Field>
                    <label htmlFor='published'>Publication year</label>
                    <input type='text' name='published' value={this.state.published} onChange={this.handleChange} placeholder='Year' />
                </Form.Field>
                <Form.Field>
                    <input className={styles.hidden} type='file' name='cover' ref={fileInput => (this.fileInput = fileInput)} onChange={this.handleChange} accept='image/*'></input>
                    <Button type='button' color='pink' onClick={() => this.fileInput.click()}>Choose book cover</Button>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='comment'>Your comment</label>
                    <textarea name='comment' value={this.state.comment} onChange={this.handleChange} placeholder='Comment' />
                </Form.Field>
                <Form.Field>
                    <label htmlFor='like'>Like it</label>
                    <Rating icon='heart' name='like' size='huge' value={this.state.like} onRate={this.handleChange}></Rating>
                </Form.Field>
                <Button type='button' onClick={this.handleResetClick}>Reset</Button>
                <Button type='submit' color="teal" disabled={!this.state.formValid}>Add The Book</Button>
            </Form>
        );
    }
}

export default connect()(AddBookForm);