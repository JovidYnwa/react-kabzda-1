import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{


  let postElemts = props.postData.map(p => <Post message = {p.message} likes= {p.likesCount}/>);

  let newPostElement = React.createRef();  

  let addPost = () => {
    props.addPost();
  }

  let onPostCahnge =() =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    }


    return(
    <div className={s.postBlock}> 
      <div className = 'item itme1'>
        <h3>My posts</h3>
      </div> 
      <div>
        <textarea onChange={onPostCahnge} 
                  ref={newPostElement} 
                  value = {props.newPostText}></textarea>
        <div>
          <button onClick = {addPost}>Add post</button>
        </div>
      </div>
      {postElemts}
    </div>
  )
}

export default MyPosts;