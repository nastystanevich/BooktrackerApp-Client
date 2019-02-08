import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import AddBookForm from '../pages/AddBookForm';
import BookDetails from '../pages/BookDetails';
import LogInForm from '../pages/LogIn';
import HeaderContent from '../containers/HeaderContent';
import SignUpForm from '../pages/SignUp';

import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import PropTypes from 'prop-types';


class App extends Component {
    // static propTypes = {
    //     dispatch: PropTypes.func,
    // }
    // componentDidMount() {
    //     this.props.dispatch(fetchUser());
    // }
    render() {
        return (
            <div className='wrapper'>
                <HeaderContent />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/auth/signup' component={SignUpForm} />
                    <Route path='/auth/login' component={LogInForm} />
                    <Route path='/addbook' component={AddBookForm} />
                    <Route path='/bookdetails/:id' component={BookDetails} />
                </Switch>
            </div>
        );
    }
}


export default App;