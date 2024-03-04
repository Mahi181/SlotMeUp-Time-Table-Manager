import React from 'react'
import classes from './DetailCard.module.css'

export default function DetailCard(props) {
    
    return (

        <div className={classes.card}>
            
             
            <div className={classes.warpper}>
            
            {props.children}
                
            </div>
        </div>
    )
}
