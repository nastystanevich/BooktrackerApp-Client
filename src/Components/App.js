import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AddBookForm from './AddBookForm/AddBookForm';
import BookDetails from './BookDetails/BookDetails';
import Header from './Header/Header';

const App = () => (
    <div className='wrapper'>
        <Header></Header>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/addbook' component={AddBookForm} />
            <Route path='/bookdetails/:id' component={BookDetails} />
        </Switch>
    </div>
)


export default App;