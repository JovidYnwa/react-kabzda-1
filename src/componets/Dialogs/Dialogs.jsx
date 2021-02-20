import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import Bobo from './../Profile/Profile';


const Dialogs = (props) =>{

    let dialogsElements = props.dialogsData1.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.messagesData1.map(m => <Message text={m.message}/>);

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = "messages">
                {messageElements}    
            </div>
            <h1>{props.dialogsData}</h1>
        </div>
    )
}

export default Dialogs;