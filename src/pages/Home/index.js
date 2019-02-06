import React, { Component } from 'react';
import BooksGroup from './components/BooksGroup';
import '../../styles/index.scss';

class Home extends Component {
    render() {
        return (
            <div className='main-container'>
                <BooksGroup/>
            </div>
        );
    }
}

export default Home;
