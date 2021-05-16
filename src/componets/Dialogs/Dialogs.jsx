import React from 'react';
//import { NavLink } from 'react-router-dom'; 
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) =>{

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message text={m.message}/>);
    let newMessageBody  = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator());
    }

    
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (        
        <div className = {s.dialogs}>

            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className = "messages">
                <div>{messageElements}</div> 
                <div>
                    <div><textarea value = {newMessageBody}
                                   onChange = {onNewMessageChange} 
                                   placeholder = 'Enter your message'></textarea></div>
                    <div><button onClick = {onSendMessageClick}>Sendo</button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;