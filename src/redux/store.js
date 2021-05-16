import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store  = {
   _state : {
    profilePage:{
      posts: [
        {id:1, message:'my first post',  likesCount: 12},
        {id:2, message:'my second post', likesCount: 10},
        {id:3, message:'my third post',  likesCount: 10}
      ],
      newPostText: 'it-kamasutra'
    },
    dialogsPage:{
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
    },
    sidebar:{}
  },
  getState(){
    return this._state;
  },
  _callsubscriber  ()  {
    console.log('State changed');
  }, 
  addPost  () {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 6
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callsubscriber(this._state);
  },
   updateNewPostText  (newText) {
    this._state.profilePage.newPostText = newText;
    this._callsubscriber(this._state);
  },
  subscribe  (observer) {
    this._callsubscriber = observer;
  },
  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callsubscriber(this._state);
  }
}



  
window.state=store;

export default store;

