import classes from './UserItem.module.css';



const UserItem = (props) => {
  

  return (

    <div className={classes.tasks}>
      <h5>{props.name}</h5>
      <div className={classes.mail}>Email:{props.email}</div>
      <div className={classes.pswd}>Password: {props.password}</div>


    </div>)
};

export default UserItem;