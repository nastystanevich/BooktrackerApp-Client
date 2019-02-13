import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import BookDetails from '../pages/BookDetails';
import LogInForm from '../pages/LogIn';
import Header from './Header';
import SignUpForm from '../pages/SignUp';
import Profile from '../pages/Profile';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class App extends Component {
    static propTypes = {
        fetchUser: PropTypes.func,
    }
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className='wrapper'>
                <Header />
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

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => {
        dispatch(fetchUser());
    },
});

export default withRouter(connect(
    null,
    mapDispatchToProps
)(App));