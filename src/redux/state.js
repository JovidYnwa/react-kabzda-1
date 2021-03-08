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
      dialogsData:[
        {id:1, name: 'Mohammed'},
        {id:2, name: 'Mane'},
        {id:3, name: 'Ferminho'}
      ],
      messagesData: [
        {id:1, message: 'hey'},
        {id:2, message: 'whats up'},
        {id:3, message: 'wahts cracking'}
      ]
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
  suscribe  (observer) {
    this._callsubscriber = observer;
  },
}

  
window.state=store;

export default store;

/* 

let state = {
    profilePage:{
      posts: [
        {id:1, message:'my first post',  likesCount: 12},
        {id:2, message:'my second post', likesCount: 10},
        {id:3, message:'my third post',  likesCount: 10}
      ],
      newPostText: 'it-kamasutra'
    },
      dialogsData:[
        {id:1, name: 'Mohammed'},
        {id:2, name: 'Mane'},
        {id:3, name: 'Ferminho'}
      ],
      messagesData: [
        {id:1, message: 'hey'},
        {id:2, message: 'whats up'},
        {id:3, message: 'wahts cracking'}
      ]
}

let renderEntireTree = () => {
  console.log('State changed');
}

export const addPost = () =>{
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 6
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};


export const updateNewPostText = (newText) =>{
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const suscribe = (observer) =>{
  renderEntireTree = observer;
} 

*/