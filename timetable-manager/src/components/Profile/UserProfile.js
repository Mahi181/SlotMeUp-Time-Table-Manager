import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm url="https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDL9-razGo1HMXZYtLVAISUgIb--XsB4YQ"/>
    </section>
  );
};

export default UserProfile;
