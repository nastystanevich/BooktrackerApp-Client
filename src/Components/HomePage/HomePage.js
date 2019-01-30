import React, { Component } from 'react';
import Header from '../Header/Header';
import BooksGroup from '../BooksGroup/BooksGroup';
import styles from './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <BooksGroup/>
        </div>
        
      </div>
      
    );
  }
}

export default HomePage;
