import classes from './StartingPageContent.module.css';
import { Link } from "react-router-dom";
import { FcGraduationCap } from 'react-icons/fc';
import { FcManager } from 'react-icons/fc';

const StartingPageContent = () => {
  return (
    <div className={classes.starting}>

      <button className={classes.btn}>
        <Link to="/student" ><FcGraduationCap size="80px"></FcGraduationCap><br></br>Student Login</Link>
      </button>
      <button className={classes.btn} >
        <Link to="/staff" ><FcManager size="80px"></FcManager><br></br>Staff Login</Link>
      </button>
    </div>

  );
};

export default StartingPageContent;
