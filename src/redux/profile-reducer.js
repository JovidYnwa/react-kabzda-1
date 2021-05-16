const ADD_POST               = 'ADD-POST';
const UPDATE_NEW_POST        = 'UPDATE-NEW-POST';

let initialState = {
  posts: [
    {id:1, message:'my first post',  likesCount: 12},
    {id:2, message:'my second post', likesCount: 10},
    {id:3, message:'my third post',  likesCount: 10}
  ],
  newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 6
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }

    return state;
}

export const addPostActionCreator = () =>{
    return {
      type: ADD_POST
    } 
  }
  
  export const updateNewPostActionCreator = (text) =>{
    return {
      type : UPDATE_NEW_POST, 
      text : text
    } 
  }
  

export default profileReducer;