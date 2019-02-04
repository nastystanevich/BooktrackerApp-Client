import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, Rating} from 'semantic-ui-react';
import BookComments from '../BookComments/BookComments';
import styles from './BookDetails.scss';
import {API_PORT} from '../../config';

class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {};
    }

    componentDidMount() {
        const url = `http://localhost:${API_PORT}/api/books/${this.id}`;
        fetch(url)
            .then((response) => response.json())
            .then((book) => {
                this.setState(book);
                this.setState({likesAmount: this.count(this.state.likes)});
                this.setState({dislikesAmount: this.count(this.state.dislikes)});
            });
    }

    count(marks) {
        return (marks.filter(like => like.like).length);
    }

    render() {
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles['cover-container']}>
                        <img className={styles.cover} src={this.state.cover} alt='oops'></img>
                    </div>
                    <div className={styles['main-content']}>
                        <div className={styles.header}>
                            <h2 className={styles.title}>{this.state.title}</h2>
                            <h3 className={styles.author}>By {this.state.author}</h3>
                            <h4>{this.state.published}</h4>
                        </div>
                        <span className={styles.icon}>
                            <Icon name="like" color='pink'>
                                {this.state.likesAmount}
                            </Icon>
                        </span>
                        <span className={styles.icon}>
                            <Icon className={styles.icon} name="like" color='grey'>
                                {this.state.dislikesAmount}
                            </Icon>
                        </span>
                        <p className={styles.description}>{this.state.description}</p>
                    </div>
                </div>
                <div className={styles.comments}>
                    <h3>Comments</h3>
                    <BookComments id={this.id}></BookComments>
                </div>
            </div>
        );
    }
}

BookDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
};


export default BookDetails;