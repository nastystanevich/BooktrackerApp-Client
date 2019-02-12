// import React, { Component } from 'react';
import BooksGroup from './components/BooksGroup';
// import '../../styles/index.scss';

// class Home extends Component {
//     render() {
//         return (
//             <div className='main-container'>
//                 <BooksGroup/>
//             </div>
//         );
//     }
// }

import { connect } from 'react-redux';
// import AddBookForm from './components/AddBookForm';

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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSubmitButtonClick: => {
//             dispatch()
//         }
//     }
// }

const Home = connect(
    mapStateToProps
)(BooksGroup);

export default Home;