import React from "react";
import emailjs from "emailjs-com"

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xbooorp', 'template_uok12o3', form.current, '07iS9ofaueIYYc1r8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


const EmailStudent=()=>{

}
export default EmailStudent;