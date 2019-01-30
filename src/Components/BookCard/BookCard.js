import React, {Component} from 'react'
import {Icon} from 'semantic-ui-react'
import styles from './BookCard.css';

class BookCard extends Component {
   constructor(props) {
        super(props);
        this.title = props.title;
        this.author = props.author;
        this.cover = props.cover;
    };

    render() {
        return (            
            <div className={styles.card}>
                <img className={styles.image} src={this.cover} alt="cover image"/>
                <div className={styles.content}>
                    <h3 className={styles.title}>
                        {this.title}
                    </h3>
                    <span className={styles.author}>{this.author}</span>
                </div>
                <div className={styles.extra}>
                      <Icon name="user" color="teal">
                        
                      </Icon> 
                      <Icon name="like" color="teal">
                        
                      </Icon>                 
                </div>
            </div>
        );
    };
}

export default BookCard;