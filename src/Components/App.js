import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import AddBookForm from '../pages/AddBookForm';
import BookDetails from '../pages/BookDetails';
import LogInForm from '../pages/LogIn';
import SignUpForm from '../pages/SignUp';

const App = () => (
    <div className='wrapper'>
        <Header></Header>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/auth/signup' component={SignUpForm} />
            <Route path='/auth/login' component={LogInForm} />
            <Route path='/addbook' component={AddBookForm} />
            <Route path='/bookdetails/:id' component={BookDetails} />
        </Switch>
    </div>
);

export default App;