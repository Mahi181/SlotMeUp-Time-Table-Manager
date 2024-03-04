import React, {  useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';




const StudentPage = (props) => {
  var url1 = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCw40p_iCCdcwHAlySc7PR6FSX9xShGWn8";
 
  const routee = useRouteMatch();
  console.log(routee);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch(
  //       "https://userdetails-d84c5-default-rtdb.firebaseio.com/student.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Unable to fetch Users");
  //     }
  //     const data = await response.json();
  //     console.log(data);




  //     const loadData = [];

  //     for (let key in data) {
  //       loadData.push({
  //         id: key,
  //         name: data[key].user,
  //         email: data[key].email,
  //         password: data[key].password,
  //       });
  //     }


  //   }

  //   fetchUser();



  // }, []);




  // console.log(props.id);


  return (
    <React.Fragment>

      <AuthForm LogsignInUrl={url1} mode="Student" navigate={`${routee.path}/studentHome/`} />;


    </React.Fragment>
  )
};

export default StudentPage;