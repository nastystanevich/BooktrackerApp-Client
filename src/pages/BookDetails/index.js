import React, {Component} from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Icon, Rating } from 'semantic-ui-react';
import BookComments from './components/BookComments';
import styles from './BookDetails.scss';
import { API_PORT } from '../../config';
import { getBook } from '../../helpers/api';
import { connect } from 'react-redux';

class BookDetails extends Component {
    static propTypes = {
        match: ReactRouterPropTypes.match.isRequired,
        //userId: PropTypes.string,
    }
    id = this.props.match.params.id;
    state = {};

    componentDidMount() {
        const backendUrl = `http://localhost:${API_PORT}/`;
        getBook(this.id)
            .then((book) => {
                this.setState(book);
                this.setState({cover: backendUrl + book.cover});
                this.setState({likesAmount: this.count(this.state.likes)});
                this.setState({dislikesAmount: this.count(this.state.dislikes)});
            });
    }

    // handleChange = (e, rating) => {
    // }

    count(marks) {
        return marks.length;
    }

    render() {
        const {cover, title, author, published, likesAmount, dislikesAmount, description} = this.state;
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.coverContainer}>
                        <img className={styles.cover} src={cover} alt='oops'></img>
                    </div>
                    <div className={styles.mainContent}>
                        <div className={styles.header}>
                            <h2 className={styles.title}>{title}</h2>
                            <h3 className={styles.author}>By {author}</h3>
                            <h4>{published}</h4>
                        </div>
                        <span className={styles.icon}>
                            <Icon name="like" color='pink'>
                                {likesAmount}
                            </Icon>
                        </span>
                        <span className={styles.icon}>
                            <Icon className={styles.icon} name="like" color='grey'>
                                {dislikesAmount}
                            </Icon>
                        </span>
                        <p className={styles.description}>{description}</p>
                        {/* <likeButton ></likeButton> */}
                        <Rating icon='heart' name='like' size='huge' rating={this.state.userLike} onRate={this.handleChange}></Rating>
                    </div>
                </div>
                <div className={styles.comments}>
                    <BookComments id={this.id}></BookComments>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userId: state.user.userData._id,
});

export default connect(mapStateToProps)(BookDetails);