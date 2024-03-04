import React from "react";
import UserData from "../../components/AdminComp/UserData";
import { FcManager } from 'react-icons/fc';
const AddStaff = () => {
    return (
        <React.Fragment>
            <UserData userCategory={<FcManager size="80px"></FcManager>} userName="Add Staff" fireUrl="https://userdetails-d84c5-default-rtdb.firebaseio.com/staff.json" logUrl="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmHdcNB-dQsfYWrJ3ItPyaTR125byfhjQ"> </UserData>

        </React.Fragment>

    )

}
export default AddStaff;