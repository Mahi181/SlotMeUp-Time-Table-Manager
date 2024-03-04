import { Link,useHistory,useRouteMatch } from "react-router-dom";
import { useContext,useState } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Notification from "../../pages/Staff/Notification";
import Modal from "../UI/Modal";
import Notifications from "react-notifications-menu";
import Notify from "./Notify";

const MainNavigation = (props) => {
  const history=useHistory();
  const match=useRouteMatch();
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  
  const authCtx = useContext(AuthContext);
  const btnClass = `${classes.button} ${isHighlighted ? classes.bump : " "}`;
  const logoutHandler = () => {
    history.replace('/');
    authCtx.logout();
  };
  const isVisibleHandler=()=>{
    setIsVisible(true);
    
  }
  const hideCardHandler=()=>{
    setIsVisible(false);

  }
  

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>SlotMeUp</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/admin">Admin Login</Link>
            </li>
          )}
          {/* {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )} */}

          {isLoggedIn && (
            <li>
              <div >
            
             {/* <button className={btnClass}  >
        <span className={classes.icon}>
        <MdOutlineNotificationsActive size="30px"></MdOutlineNotificationsActive>
        <Notifications></Notifications>
        </span>
        <span>Your notifications</span>
        <span className={classes.badge}>0</span>
      
              </button> */}
              
              <button className={classes.button} onClick={logoutHandler} >Logout</button>
              <button className={classes.button}>
               <Notify></Notify>
             
              </button>
              </div>
              {/* {isVisible && 
              <Modal onClose={hideCardHandler}>
              <Notification></Notification>
              </Modal>} */}
            </li>

          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
