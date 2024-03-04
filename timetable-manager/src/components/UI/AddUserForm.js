import { useRef, useState, useContext, useEffect } from 'react';
import AuthContext from "../../store/auth-context";

import classes from './AddUserForm.module.css';

const AddUser = (props) => {
  const UserInputRef = useRef();

  const EmailInputRef = useRef();
  const PasswordInputRef = useRef();
  const Authctx = useContext(AuthContext);
  const [isweekPassword, setisWeekPassword] = useState(false);
  const [isweekPasswordMes, setisWeekPasswordMes] = useState("");
  const [iserror, setIserror] = useState(false);

  async function fetchUserDetail(data) {
    await fetch(props.SignUpUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;

              throw new Error(errorMessage);

            }
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        Authctx.login(data.idToken, expirationTime.toISOString());
        // history.replace(`${props.navigate}`);
      })
      .catch((err) => {
        setisWeekPassword(true);
        setIserror(true);
        setisWeekPasswordMes(err.message);
        console.log("nhi jii");
        return;

      });
    console.log("Ohk jii");


  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUserValue = UserInputRef.current.value;
    const enteredEmailValue = EmailInputRef.current.value;
    const enteredPasswordValue = PasswordInputRef.current.value;
    const d = {
      email: enteredEmailValue,
      password: enteredPasswordValue,
      returnSecureToken: true,
    }


    if (enteredUserValue.trim().length > 0 && enteredPasswordValue.trim().length >= 8) {

      fetchUserDetail(d);
      props.onEnterTask(enteredUserValue, enteredEmailValue, enteredPasswordValue);


    }
    else {
      setisWeekPassword(true);
      setisWeekPasswordMes("Password should be greater than 8 character ")

    }

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      User Name:<input type='text' ref={UserInputRef} />
      User Email Id:<input type='email' ref={EmailInputRef} />
      User Password:<input type='text' ref={PasswordInputRef} />

      {isweekPassword && (
        <p className={classes.invalid}>{isweekPasswordMes} : please Enter again</p>
      )}
      <button className={classes.btn}>{props.loading ? 'Adding...' : 'Add User'}</button>
    </form>
  );
};

export default AddUser;
