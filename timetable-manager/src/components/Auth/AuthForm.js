import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isweekPassword, setisWeekPassword] = useState(false);
  const [isweekPasswordMes, setisWeekPasswordMes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const Authctx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  let url;

  async function fetchUserDetail(data, url) {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);

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
        console.log(data.email);
        Authctx.login(data.idToken, expirationTime.toISOString());
     
        history.replace(`${props.navigate + data.email}`);
      })
      .catch((err) => {
        setisWeekPassword(true);
        setisWeekPasswordMes(err.message);
      });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const entereEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;
    const data = {
      email: entereEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    setIsLoading(true);
    if (isLogin) {
      url = props.LogsignInUrl;
      fetchUserDetail(data, url);
    } else {
      url = props.LogsignUpUrl;

      fetchUserDetail(data, url);
    }
  };

  return (
    <section className={classes.auth}>

      <h1>{props.mode} Login </h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={inputEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={inputPasswordRef}
          />
          {isweekPassword && (
            <p className={classes.invalid}>{isweekPasswordMes}</p>
          )}
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>Login</button>
          )}
          {isLoading && <p>Loading...</p>}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >

          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
