import {renderEntireTree} from '../render';

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

window.state=state;

export let addPost = () =>{
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 6
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};

export let updateNewPostText = (newText) =>{
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};
  
export default state;