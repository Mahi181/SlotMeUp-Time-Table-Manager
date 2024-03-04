import React from 'react'
import classes from './Card.module.css'

export default function Card(props) {
    let newClassName = `color_bg ${props.alt}`
    let bg_img = `url(${props.images})`
    let { title, name, year } = props
    return (

        <div className={classes.card}>
             
            <div className={classes.warpper}>
            {props.children}
                <div className={newClassName}></div>
                <div className={classes.card_img} style={{ "backgroundImage": bg_img }}></div>
               
                <div className={classes.cardInfo}>
                    <h1>{title}</h1>
                    <p className={classes._name}>{name}</p>
                    <div className={classes.action}>
                        <p>{year}
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
