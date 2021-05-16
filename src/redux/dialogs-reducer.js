const UDATE_NEW_MESSAGE_BODY = 'UDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE           = 'SEND_MESSAGE';
 
let initialState = {
  dialogs: [
    {id:1, name: 'Mohammed'},
    {id:2, name: 'Mane'},
    {id:3, name: 'Ferminho'}
  ],
  messages: [
    {id:1, message: 'hey'},
    {id:2, message: 'whats up'},
    {id:3, message: 'wahts cracking'}
  ],
  newMessageBody:'enter a new message'
};

export const dialogsReducer = (state = initialState, action) =>{
  switch(action.type){
    case UDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id:6, message: body}); 
      return state;
    default:
      return state;
     }
}


export const sendMessageCreator = () =>{
  return {
    type: SEND_MESSAGE
  } 
}

export const updateNewMessageBodyCreator = (body) =>{
  return {
    type : UDATE_NEW_MESSAGE_BODY, 
    body : body
  } 
}
  

export default dialogsReducer;