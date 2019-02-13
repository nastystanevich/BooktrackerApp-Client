import { setUserIsLoggedIn } from '../../../../../../actions';
import { connect } from 'react-redux';
import LogOutButton from './LogOutButton';


const mapDispatchToProps = (dispatch) => ({
    onLogOutClick: () => { dispatch(setUserIsLoggedIn(false)); },
});

const LogOutButtonContainer = connect(
    null,
    mapDispatchToProps
)(LogOutButton);

export default LogOutButtonContainer;