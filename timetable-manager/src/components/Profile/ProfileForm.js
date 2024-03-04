import { useRef, useContext, useState } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";

const ProfileForm = (props) => {
  const refPassword = useRef();
  const authctx = useContext(AuthContext);
  const [errorMessage, seterrorMessage] = useState("");
  const [isValidPassword, setisValidPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function passwordChange(data) {
    await fetch(
      props.url,
      {
        method: "POST",
        body: JSON.stringify(data),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        setisValidPassword(true);
        setIsSuccess(true);
      } else {
        return res.json().then((data) => {
          if (data && data.error && data.error.message) {
            setisValidPassword(false);
            let errorMessage = data.error.message;
            seterrorMessage(errorMessage);
          }
        });
      }
    });
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPassword = refPassword.current.value;
    const data = {
      idToken: authctx.token,
      password: enteredPassword,
      returnSecureToken: true,
    };
    passwordChange(data);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={refPassword} />
        {!isValidPassword && errorMessage}
        {isSuccess && <p>You successfully changed your password</p>}
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
