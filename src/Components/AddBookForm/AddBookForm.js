import React, {Component} from 'react';
import {Button, Form, Rating} from 'semantic-ui-react';
import styles from './AddBookForm.scss';


class AddBookForm extends Component {
    constructor(props) {
        super(props);
        this.coverFile = React.createRef();
        this.state = {
            titleValid: false,
            authorValid: false,
            publishedValid: false,
            //coverValid: false,
            formValid: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        //this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    }

    handleChange(event, rating) {
        const target = event.target;
        let value = null;
        switch (target.type) {
        case 'checkbox':
            value = target.checked;
            break;
        case 'file':
            value = target.files[0];
            break;
        case 'underfined':
            value = target.rating;
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

    validateField(fieldName, value) {
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

    validateForm() {
        this.setState({
            formValid:
                this.state.titleValid &&
                this.state.authorValid &&
                this.state.publishedValid,
            //this.state.coverValid,
        });
    }

    handleResetClick() {
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

    handleSubmit() {
        const book = {
            title: this.state.title,
            author: this.state.author,
            cover: this.state.cover,
            published: this.state.published,
            user: null,
            comment: this.state.comment,
        };
        if (this.state.like) {
            book.like = this.state.comment;
        }
        const url = 'http://localhost:3002/api/books';

        const queryBody = new FormData();
        for (const key in this.state) {
            queryBody.append(key, this.state[key]);
        }
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        fetch(url, {
            method: 'POST',
            config,
            body: queryBody,
        })
            .then(response => {
                this.handleResetClick();
                response.json();
            });
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
                <Form.Field className={styles['likes-container']}>
                    <label htmlFor='like'>Like it</label>
                    <Rating icon='heart' name='like' size='huge' rating={this.state.like} onRate={this.handleChange}></Rating>
                </Form.Field>
                <Button type='button' onClick={this.handleResetClick}>Reset</Button>
                <Button type='submit' color="teal" disabled={!this.state.formValid}>Add The Book</Button>
            </Form>
        );
    }
}

export default AddBookForm;