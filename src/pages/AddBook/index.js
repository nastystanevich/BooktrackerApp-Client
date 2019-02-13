import { connect } from 'react-redux';
import AddBookForm from './components/AddBookForm';

const mapStateToProps = (state) => {
    if (state.user.userLogged) {
        return ({
            userLogged: state.user.userLogged,
            userId: state.user.userData._id,
        });
    }
    return ({
        userLogged: state.user.userLogged,
    });
};

const AddBook = connect(
    mapStateToProps
)(AddBookForm);

export default AddBook;