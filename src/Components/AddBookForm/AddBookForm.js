import React, {Component} from 'react'
import { Button, Form} from 'semantic-ui-react'
import styles from './AddBookForm.css'


class AddBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {         
            titleValid: false,
            authorValid: false,
            publishedValid: false,
            coverValid: false,
            formValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
    };

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value}, 
            () => { this.validateField(name, value) 
        });
    };

    validateField(fieldName, value) {
        let titleValid = this.state.titleValid;
        let authorValid = this.state.authorValid;
        let publishedValid = this.state.publishedValid;
        let coverValid = this.state.coverValid;

        switch(fieldName) {
          case 'title':
            titleValid = value.match(/\s*[а-яА-ЯёЁa-zA-Z0-9]+/) ;
            break;
          case 'author':
            authorValid = value.match(/\s*[а-яА-ЯёЁa-zA-Z]+/i);
            break;
        case 'published':
            publishedValid = value.match(/^[1-9][0-9]{3}$/);
            break;
        case 'cover':
            coverValid = value.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);
            break;
          default:
            break;
        };

        this.setState({
            titleValid: titleValid,
            authorValid: authorValid,
            publishedValid: publishedValid,
            coverValid: coverValid
            },
            this.validateForm);
    };

    validateForm() {
        this.setState({
            formValid: 
                this.state.titleValid &&
                this.state.authorValid &&
                this.state.publishedValid &&
                this.state.coverValid
        });
    };

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
            formValid: false
        }); 
    };

    handleSubmit() {
        const book = {
            title: this.state.title,
            author: this.state.author,
            cover: this.state.cover,
            published: this.state.published,
            comments: {
                user: null,
                comment: this.state.comment
            }
        }
        if (this.state.like) {
            book.likes = {
                user: null,
                like: this.state.comment
            }    
        }
        const queryBody = JSON.stringify(book);
        console.log(queryBody);
        const url = 'http://localhost:3002/api/books';

        fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: queryBody,
        })
        .then(response => {
            this.handleResetClick();
            response.json()
        });
    };

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
                    <label htmlFor='cover'>Cover's URL</label>
                    <input type='text' name='cover' value={this.state.cover} onChange={this.handleChange} placeholder='URL' />
                </Form.Field>
                <Form.Field>
                    <label htmlFor='cover'>Your comment</label>
                    <textarea name='comment' value={this.state.comment} onChange={this.handleChange} placeholder='Comment' />
                </Form.Field>
                <Form.Field>
                    <label htmlFor='like'>Like it</label>
                    <input type='checkbox' name='like'  checked={this.state.like}  onChange={this.handleChange}></input>
                </Form.Field>
                <Button type="button" onClick={this.handleResetClick}>Reset</Button>
                <Button type='submit' color="teal" disabled={!this.state.formValid}>Add The Book</Button>
            </Form>
        );
    };
};



export default AddBookForm;