import React,{useRef} from "react";
import classes from "./SlotBook.module.css"
import TeacherTimeTable from "./TeacherTimetable";
import emailjs from "emailjs-com"

const FIREBASE_DOMAIN = "https://userdetails-d84c5-default-rtdb.firebaseio.com/staff";
const SlotBook = (props) => {
    const date = new Date();
    const emailInputRef=useRef();
    const nameInputRef=useRef();
    const dateInputRef=useRef();
    const timeInputRef=useRef();
    const messageInputRef=useRef();
    const destinationInputRef=useRef();
    const enrollmentInputRef=useRef();




    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    let lastDate = `${year}-${month}-${day + 7}`;
    console.log(currentDate);

    const submitOrderHandler = async (day,userData,id) => {
        try {
          //`
          const response = await fetch(
            `${FIREBASE_DOMAIN}/${id}/notification/${day}.json`,
            {
              method: "PATCH",
              body: JSON.stringify(userData),
            }
          );
          if (!response.ok) {
            throw new Error("Unable to Order...");
          }
          
      
        } catch (error) {
          
        }
      };
    const sendEmail = (e) => {
        e.preventDefault();
       
        const enteredMail=emailInputRef.current.value;
        const enteredName=nameInputRef.current.value;
       // const enteredDestination=destinationInputRef.current.value;
        const enteredDate=dateInputRef.current.value;
        const enteredTime=timeInputRef.current.value;
        const enteredEnrollment=enrollmentInputRef.current.value;
        const enteredMessage=messageInputRef.current.value;

        const data={
            email:enteredMail,
            name:enteredName,
            enrollment:enteredEnrollment,
            date:enteredDate,
            time:enteredTime,
            message:enteredMessage
            

        }
        
        console.log(enteredMail);




    
        // emailjs.sendForm('service_xbooorp', 'template_uok12o3', e.target, '07iS9ofaueIYYc1r8')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
          let teacherId=localStorage.getItem("teacherId");
       
        
          const startingAddedId = enteredMail;
          let newId=startingAddedId.replaceAll(".","_");
          console.log(newId);
          submitOrderHandler(newId,data,teacherId);

          emailInputRef.current.value="";
          nameInputRef.current.value="";
         // const enteredDestination=destinationInputRef.current.value;
          dateInputRef.current.value="";
          timeInputRef.current.value="";
          enrollmentInputRef.current.value="";
          messageInputRef.current.value="";
      };

      

    return (
        <React.Fragment>
            

            <div className={classes.body}>
                <TeacherTimeTable></TeacherTimeTable>
                <h1>Book your Slot here </h1>

                <form onSubmit={sendEmail} >

                <div class="row">
                    <div class="col-xs">
                        <div className={classes.styledInput}>
                            <input type="text" name="name" ref={nameInputRef} required  />
                            <label>Enter Your Name</label>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div className={classes.styledInput}>
                            <input type="text"name="email" ref={emailInputRef} required />
                            <label>Enter Your Email ID</label>
                        </div>
                       
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div className={classes.styledInput}>
                            <input type="text" name="enrNo" ref={enrollmentInputRef} required  />
                            <label>Enter Your Enrollment Number</label>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <div className={classes.styledInput}>
                            <div>Select Date:</div>
                            <label for="date"></label> 
                            <input id="date" type="date" name="date" ref={dateInputRef} min={currentDate} max={lastDate}  />
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div className={classes.styledInput} >
                            <div>Select time:</div>
                            <label for="time"></label>
                            <select className={classes.selectTime} ref={timeInputRef} name="slotTime">
                                <option>09:00-10:00</option>
                                <option>10:00-11:00</option>
                                <option>11:00-12:00</option>
                                <option>12:00-01:00</option>
                                <option>01:00-02:00</option>
                                <option>02:00-03:00</option>
                                <option>03:00-04:00</option>
                                <option>04:00-05:00</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div className={classes.styledInput}>
                            <textarea className={classes.textarea} name="reason" ref={messageInputRef} required></textarea>
                            <label>Why You Want to meet ?</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <input type="submit" className={classes.submitBtn} value="Book slot"></input>
                    
                    </div>
                </div>
                </form>



            </div>
        </React.Fragment>
    )


}

export default SlotBook;