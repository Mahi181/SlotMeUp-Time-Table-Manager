import React from "react";
import UserData from "../../components/AdminComp/UserData";
import { FcGraduationCap } from 'react-icons/fc';
const AddStudent=()=>{
    return (
        <React.Fragment>
            <UserData userCategory={<FcGraduationCap size="80px"></FcGraduationCap> } userName="Add Student" fireUrl={`https://userdetails-d84c5-default-rtdb.firebaseio.com/student.json`} logUrl="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCw40p_iCCdcwHAlySc7PR6FSX9xShGWn8"> </UserData>
            
        </React.Fragment>

    )

}
export default AddStudent;