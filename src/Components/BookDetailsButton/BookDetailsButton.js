import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class BookDetailsButton extends Component {
    render() {
        const path = `/bookdetails/${this.props.id}`
        return (
            <Link to={path}>
                <Icon size="big" color="pink" name="book"></Icon>
            </Link>
        );
    };
};

export default BookDetailsButton;