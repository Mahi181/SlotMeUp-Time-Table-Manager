import React from "react";
import ReactDOM  from "react-dom";

import classes from './Modal.module.css';

const Backdrop=props=>{
    return(
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )

}

const ModalOverLay=props=>{
    return (
        <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const portalElement=document.getElementById('overlay');

const Modal=props=>{
    return(
        //Simple Method
    //     <React.Fragment>
    // <Backdrop />
    // <ModalOverLay>{props.children}</ModalOverLay>
    // </React.Fragment>

    //Using React Portal
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>,portalElement)}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}
    </React.Fragment>

    )

}

export default Modal;