import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import BookDetails from '../pages/BookDetails';
import LogInForm from '../pages/LogIn';
import HeaderContent from '../containers/HeaderContent';
import SignUpForm from '../pages/SignUp';
import Profile from '../pages/Profile';

import { connect } from 'react-redux';
import { fetchUser, fetchBooks } from '../actions';
import PropTypes from 'prop-types';

class App extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
    }
    componentDidMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchBooks());
    }
    render() {
        return (
            <div className='wrapper'>
                <HeaderContent />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/user/profile' component={Profile} />
                    <Route path='/auth/signup' component={SignUpForm} />
                    <Route path='/auth/login' component={LogInForm} />
                    <Route path='/addbook' component={AddBook} />
                    <Route path='/bookdetails/:id' component={BookDetails} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect()(App));