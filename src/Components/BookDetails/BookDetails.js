import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import BookComments from '../BookComments/BookComments';
import styles from './BookDetails.scss';

class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {};
    }

    componentDidMount() {
        const url = `http://localhost:3002/api/books/${this.id}`;
        fetch(url)
            .then((response) => response.json())
            .then((book) => {
                this.setState(book);
                this.setState({likesAmount: this.state.likes});
            });
    }

    render() {
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                    <img src={this.state.cover} alt='oops'></img>
                    <div className={styles['main-content']}>
                        <div className={styles.header}>
                            <h2 className={styles.title}>{this.state.title}</h2>
                            <h3 className={styles.author}>By {this.state.author}</h3>
                            <h4>{this.state.published}</h4>
                        </div>
                        <Icon name="like">
                            {this.state.likesAmount}
                        </Icon>
                        <p className={styles.description}>{this.state.description}</p>
                    </div>
                </div>
                <div className={styles.comments}>
                    <h3>Comments</h3>
                    <BookComments comments={this.state.comments}></BookComments>
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