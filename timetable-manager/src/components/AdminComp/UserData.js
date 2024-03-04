
import React,{useState,useEffect,useContext} from "react";
import useHttp from "../../Hooks/Http-use";
import NewUser from "./NewUser";
import UserView from "./UsersView";
import classes from './UserData.module.css'
import AuthContext from "../../store/auth-context";


const UserData=(props)=>{
    const [tasks, setTasks] = useState({});
    console.log(props.fireUrl)

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url:props.fireUrl },
      transformTasks
    );
  }, [fetchTasks,props.fireUrl]);

  const taskAddHandler = (task,email,password) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <section className={classes.profile}>
        <h1>{props.userCategory}</h1>
        <h1>{props.userName}</h1></section>

      < NewUser onAddTask={taskAddHandler} Urll={props.fireUrl} signUrll={props.logUrl} />
      <UserView
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
        Urll={props.fireUrl}
      />
    </React.Fragment>
  );
}
export default UserData;