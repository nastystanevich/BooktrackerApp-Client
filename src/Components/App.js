import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AddBookForm from './AddBookForm/AddBookForm';

const App = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/addbook' component={AddBookForm} />
    </Switch>
)

export default App;