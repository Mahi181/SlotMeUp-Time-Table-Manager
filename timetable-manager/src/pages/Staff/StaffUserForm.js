import React, { useState, useRef, useCallback } from "react"
import classes from './StaffUserForm.module.css'


const StaffUserForm = (props) => {
  const [isformValidity, setIsformValidity] = useState({
    contact: true,
    academic: true,
    program: true,
    branch: true,
    batch: true,
    semester: true,
  });
  const [isError, setIsError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmitted, setDidSubmitted] = useState(false);
  const [isdataSet, setIsDataSet] = useState(false);
  const [isform, setIsform] = useState(false);

  const refContact = useRef();
  const refAcademic = useRef();
  const refProgram = useRef();
  const refBranch = useRef();
  const refBatch = useRef();
  const refCurrentSem = useRef();





  const submitHandler = (event) => {
    event.preventDefault();

    const enteredContactNumber = refContact.current.value;
    const enteredAcademic = refAcademic.current.value;
    const enteredProgram = refProgram.current.value;
    const enteredBranch = refBranch.current.value;
    const enteredBatch = refBatch.current.value;
    

    const isValidEnteredContact = !(enteredContactNumber.trim().length === 11);
    const isValidEnteredProgram = !(enteredProgram.trim() === "");
    const isValidEnteredAcademic = !(enteredAcademic.trim() === "");
    const isValidEnteredBranch = !(enteredBranch.trim() === "");
    const isValidEnteredBatch = !(enteredBatch.trim() === "");
    
    setIsformValidity({
      contact: isValidEnteredContact,
      academic: isValidEnteredAcademic,
      program: isValidEnteredProgram,
      branch: isValidEnteredBranch,
      batch: isValidEnteredBatch,
      
    });
    const formIsValid =
      isValidEnteredContact &&
      isValidEnteredAcademic &&
      isValidEnteredProgram &&
      isValidEnteredBranch &&
      isValidEnteredBatch;

    if (!formIsValid) {
      return;
    }
    submitOrderHandler({
      contact: enteredContactNumber,
      Dept: enteredAcademic,
      grade: enteredProgram,
      office: enteredBranch,
      room: enteredBatch,
      
    })

  }
  const submitOrderHandler = async (userData) => {

    try {
      console.log(userData);
      setIsSubmitting(true);
      const response = await fetch(
        `https://userdetails-d84c5-default-rtdb.firebaseio.com/staff/${props.id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(userData),
        }
      );
      if (!response.ok) {
        throw new Error("Unable to Order...");
      }
      setIsSubmitting(false);
      setDidSubmitted(true);

    } catch (error) {
      setIsSubmitting(false);
      setIsError(error.message);
    }
  };
  const fetchData = useCallback(
    async function () {
      const response = await fetch(`https://userdetails-d84c5-default-rtdb.firebaseio.com/staff/${props.id}.json`);
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch student.");
      }

      let flag = 0;
      for (const key in data) {
        console.log(key);
        if (key === "academics") {
          flag = 1;
}
}
      console.log(flag);
      if (flag === 1) {
        setIsDataSet(true)

      }
      else if (flag === 0) {
        setIsDataSet(false);
      }

      console.log(isdataSet);

    }, [setIsDataSet]
  )

  fetchData();
  function setForm() {
    setIsDataSet(true);
    setIsform(true)
    console.log("Ok")
  }
  console.log(isdataSet);
  //console.log(data);
  return (
    <React.Fragment>

      {!didSubmitted && <div className={classes.container}>
        <form className={classes.contact} onSubmit={submitHandler} >
          <h3>Details</h3>
          <h4>Please fill your details here!!</h4>
          {!isSubmitting && <div>
            <div
              className={`${classes.control} ${isformValidity.contact ? "" : classes.invalid
                }`}
            ></div>
            <fieldset>
              <input placeholder="Contact Number" type="text" ref={refContact} required />

            </fieldset>

            <fieldset>
              <input placeholder="Department Name" ref={refAcademic} type="text" required />
            </fieldset>

            <fieldset>
              <input placeholder="Grade" ref={refProgram} type="text" required />
            </fieldset>

            <fieldset>
              <input placeholder="Office Building " ref={refBranch} type="text" required />
            </fieldset>
            <fieldset>
              <input placeholder="Room no " type="text" ref={refBatch} required />
            </fieldset>
            



            <fieldset>
              <button name="submit" type="submit" data-submit="...Sending" onClick={submitOrderHandler}>Submit</button>
            </fieldset>
          </div>}

        </form>


      </div>

      }
      {didSubmitted && <p>Details submitted successfully</p>}
    
      

    </React.Fragment>

  )

}
export default StaffUserForm;