import ProfileCard from './components/ProfileCard';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    username: state.user.userData.username,
    booksLikes: state.user.userData.booksLikes,
    booksDislikes: state.user.userData.booksDislikes,
    booksRead: state.user.userData.booksRead,
});

const Profile = connect(
    mapStateToProps
)(ProfileCard);

export default Profile;