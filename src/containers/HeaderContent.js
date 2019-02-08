import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
    userLogged: state.user.userLogged,
    username: state.user.userData.username,
});

const HeaderContent = connect(
    mapStateToProps
)(Header);

export default HeaderContent;