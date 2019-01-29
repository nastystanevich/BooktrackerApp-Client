import React, { Component } from 'react';
import Header from '../Header/Header';
import BooksGroup from '../BooksGroup/BooksGroup';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <div className="homePage-content-container">
          <BooksGroup />
        </div>
        
      </div>
      
    );
  }
}

export default HomePage;
