import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return(  
    <div className={s.item}>
        <NavLink to={path}>{props.name}</NavLink>                    
    </div>
    )
}

const Message = (props) =>{
    return (
        <div className = "message">{props.text}</div>
    )
}

const Dialogs = (props) =>{

    let dialogsData = [
        {id:1, name: 'Mohammed'},
        {id:2, name: 'Mane'},
        {id:3, name: 'Ferminho'}
    ]

    let messagesData = [
        {id:1, message: 'hey'},
        {id:2, message: 'whats up'},
        {id:3, message: 'wahts cracking'}
    ]
    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>
            <div className = "messages">
                <Message text={messagesData[0].message}/>
                <Message text={messagesData[1].message}/>
                <Message text={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;