import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class BookDetailsButton extends Component {
    render() {
        const path = `/bookdetails/${this.props.id}`;
        return (
            <Link to={path}>
                <Icon size="big" color="pink" name="book"></Icon>
            </Link>
        );
    }
}

BookDetailsButton.propTypes = {
    id: PropTypes.string,
};

export default BookDetailsButton;