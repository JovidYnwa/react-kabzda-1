import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,updateNewPostActionCreator}  from  '../../../redux/profile-reducer';


const MyPosts = (props) =>{

  let postElemts = props.postData.map(p => <Post message = {p.message} likes = {p.likesCount}/>);

  let newPostElement = React.createRef();  

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostCahnge =() =>{
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
    }

    return(
    <div className={s.postBlock}> 
      <div className = 'item itme1'>
        <h3>My posts</h3>
      </div> 
      <div>
        <textarea onChange = {onPostCahnge} 
                  ref      = {newPostElement} 
                  value    = {props.newPostText}>
        </textarea>
        <div>
          <button onClick = {addPost}>Add post</button>
        </div>
      </div>
      {postElemts}
    </div>
  )
}

export default MyPosts;