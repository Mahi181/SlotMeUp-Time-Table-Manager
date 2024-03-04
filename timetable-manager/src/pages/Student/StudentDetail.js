import React, { useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from './StudentDetail.module.css'
import { getDetailsStudent } from "../../lib/api";
import useHttp from "../../lib/use-http";
import Card from "../../components/UI/card";




const StudentDetail = (props) => {
  const hist = useHistory();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getDetailsStudent, true);
  useEffect(() => {
    sendRequest(props.id);

  }, [sendRequest, props.id]);
  //   const {contact:contact,
  //     academics:academics,
  //     program:program,
  //     branch:branch,
  //     batch:batch,
  //     semester:semester}=loadedQuote;
  const navigateTo = () => {
    hist.push(`/student/profile/${props.kid}`)
  }
  let contact;
  let academic;
  let program;
  let branch;
  let batch;
  let semester;

  for (const key in loadedQuote) {
    if (key === "contact") {
      contact = loadedQuote[key];
    }
    else if (key === "academics") {
      academic = loadedQuote[key];
    }
    else if (key === "program") {
      program = loadedQuote[key];
    }
    else if (key === "branch") {
      branch = loadedQuote[key];
    }
    else if (key === "batch") {
      batch = loadedQuote[key];
    }
    else if (key === "semester") {
      semester = loadedQuote[key];
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

  if (!loadedQuote.academics) {
    return <p> <Card title="Details are not filled ">
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

  
  return (
    <React.Fragment>

      <div className={classes.section}>
        <div>
          <marquee > <h1>STUDENT DETAIL</h1></marquee>
          <p>CONTACT NUMBER : {contact} </p> <hr></hr>
          <p>ACADEMICS : {academic} </p><hr></hr>
          <p>PROGRAM : {program}</p><hr></hr>
          <p>BRANCH : {branch} </p><hr></hr>
          <p>BATCH : {batch} </p><hr></hr>
          <p>SEMESTER : {semester} </p><hr></hr>

          <button className={classes.glowonhover} type="button" onClick={navigateTo}>UPDATE ME!</button>
        </div>
  </div>

 </React.Fragment>

  )
}

export default StudentDetail;