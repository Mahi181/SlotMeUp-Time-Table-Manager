
import { Fragment,useState } from 'react';


import MainNavigation from './MainNavigation';

const Layout = (props) => {
  const [isShow,setIsShow]=useState(false);
  const clickHandler=()=>{
    setIsShow(true);
    console.log("Hello");
  }
  console.log(isShow);
  

  return (
    <Fragment>
      <MainNavigation  />
     
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
