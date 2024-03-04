import React,{useEffect} from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {  getSingleStaff } from "../../lib/api";
import useHttp from "../../lib/use-http";
import Card from "../../components/UI/card";
import Section from "../../components/UI/Section";

import classes from './StaffDetail.module.css'

const StaffDetail=(props)=>{
  const hist=useHistory();
    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
      } = useHttp(getSingleStaff, true);
      useEffect(() => {
        sendRequest(props.id);
    
      }, [sendRequest,props.id]);
    //   const {contact:contact,
    //     academics:academics,
    //     program:program,
    //     branch:branch,
    //     batch:batch,
    //     semester:semester}=loadedQuote;
    const navigateTo = () => {
      hist.push(`/staff/profile/${props.kid}`)
    }
    let contact;
    let dept;
    let grade;
    let office;
    let room_no;
    
    console.log(loadedQuote);

      for(const key in loadedQuote){
      if(key==="contact"){
        contact=loadedQuote[key];
      }
      else if(key==="Dept"){
        dept=loadedQuote[key];
      }
      else if(key==="grade"){
        grade=loadedQuote[key];
      }
      else if(key==="office"){
        office=loadedQuote[key];
      }
      else if(key==="room"){
        room_no=loadedQuote[key];
      }
     

       
      }
      if (status === "pending") {
        return (
          <div className="centered">
            <Card title="waiting"></Card>
          </div>
        );
      }
      if (error) {
        return <p className="centered focused"> <Card title={error}></Card></p>;
      }
    
      if (!loadedQuote.contact) {
        return <p> <Card title="Details is not filled ">
          <button className={classes.glowonhover} type="button" onClick={navigateTo}>Fill Details!</button>
          </Card></p>;
      }


//     fetch('https://userdetails-d84c5-default-rtdb.firebaseio.com/student/-ND-XSmAIC9yxYRWabk3.json', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'f',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

    return(
        <React.Fragment>
           <div className={classes.section}>
        <div>
          <marquee > <h1>STAFF DETAIL</h1></marquee>
          <p>CONTACT NUMBER : {contact} </p> <hr></hr>
          <p>DEPARTMENT : {dept} </p><hr></hr>
          <p>GRADE : {grade}</p><hr></hr>
          <p>OFFICE : {office} </p><hr></hr>
          <p>ROOM : {room_no} </p><hr></hr>
          

          <button className={classes.glowonhover} type="button" onClick={navigateTo}>UPDATE ME!</button>
        </div>
  </div>

          

        </React.Fragment>

    )
}

export default StaffDetail;