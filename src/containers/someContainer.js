import { connect } from 'react-redux';
import AuthenticationButtons from '../components/AuthenticationButtons';

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        username: state.user.username,
    }
}

const someContainer = connect(
    mapStateToProps
)(AuthenticationButtons);

export default someContainer;