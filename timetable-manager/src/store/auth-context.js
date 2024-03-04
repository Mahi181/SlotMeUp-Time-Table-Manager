import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => { },
  logout: () => { },
  id: "",
  setidd: (id) => { },
  users: [],
  setTeacherId: (id) => { },
  teacherId: "",
  setTeacherLoginId: (id) => { },
  loginId: "",






});
// function generateRandomInteger(max) {
//   return Math.floor(Math.random() * max) + 1;
// }

const calculateTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const retreiveToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");

  const remainingRetreiveTime = calculateTime(storedExpirationTime);
  if (remainingRetreiveTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return {
    token: storedToken,
    duration: remainingRetreiveTime,
  };
};
export const AuthContextProvider = (props) => {
  const his = useHistory();
  const tokenData = retreiveToken();
  let initializeToken;

  if (tokenData) {
    initializeToken = tokenData.token;
  }

  const [token, setToken] = useState(initializeToken);
  const [id, setid] = useState("");
  const [teacherid, setTeacher] = useState("");
  const [teacherLoginid, setloginId] = useState("");



  const userIsLoggedIn = !!token;
  const logOutHandler = useCallback(() => {
    setToken(null);
    setid("");
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("id");
    localStorage.removeItem("teacherId");
    localStorage.removeItem("teacherLoginId");

    his.replace("/");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, [his]);
  const logInHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    const remainingDuration = calculateTime(expirationTime);
    logoutTimer = setTimeout(logOutHandler, remainingDuration);

  };
  const setIdHandler = (idd) => {
    setid(idd);
    localStorage.setItem("id", idd);

  };
  const setTeacherIdHandler = (idd) => {
    setTeacher(idd);
    localStorage.setItem("teacherId", idd);

  };
  const setTeacherLoginIdHandler = (idd) => {
    setloginId(idd);
    localStorage.setItem("teacherLoginId", idd);

  };




  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logOutHandler, tokenData.duration);
    }
  }, [tokenData, logOutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler,
    id: id,
    setidd: setIdHandler,
    setTeacherId: setTeacherIdHandler,
    teacherId: teacherid,
    setTeacherLoginId: setTeacherLoginIdHandler,
    loginId: teacherLoginid





  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
