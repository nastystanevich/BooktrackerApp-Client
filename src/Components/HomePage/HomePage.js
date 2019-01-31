import React, { Component } from 'react';
import BooksGroup from '../BooksGroup/BooksGroup';
import styles from './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
        <div className={styles.content}>
          <BooksGroup/>
        </div>
    );
  }
}

export default HomePage;
