import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{
  let postData= [
    {id:1, message:'my first post', likesCount: 12},
    {id:2, message:'my second post', likesCount: 10},
    {id:3, message:'my third post', likesCount: 10}
  ]
    return(
    <div className={s.postBlock}> 
      <div className = 'item itme1'>
        <h3>My posts</h3>
      </div> 
      <div>
        <textarea ></textarea>
        <div >
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <Post message = {postData[0].message} likes= {postData.[0].likesCount}/>
      <Post message = {postData[1].message} likes= {postData.[1].likesCount} />
      <Post message = {postData[2].message} likes= {postData.[2].likesCount} />

    </div>
  )
}

export default MyPosts;