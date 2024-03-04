import React from 'react';
import AuthForm from '../components/Auth/AuthForm';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const StaffPage = () => {

  var url1="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDmHdcNB-dQsfYWrJ3ItPyaTR125byfhjQ";
  const routee=useRouteMatch();
  return (
    <React.Fragment>
   <AuthForm LogsignInUrl={url1} mode="Staff" navigate={`${routee.path}/staffHome/`} />;
  
  </React.Fragment>
  )
};

export default StaffPage;
