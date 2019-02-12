import { connect } from 'react-redux';
import AddBookForm from './components/AddBookForm';
import { postNewBook } from '../../actions';

const mapStateToProps = (state) => {
    if (state.user.userLogged) {
        return ({
            userLogged: state.user.userLogged,
            id: state.user.userData._id,
        });
    }
    return ({
        userLogged: state.user.userLogged,
    });
};

const mapDispatchToProps = (dispatch) => ({
    onSubmitClick: (book) => {
        dispatch(postNewBook(book));
    },
});

const AddBook = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBookForm);

export default AddBook;