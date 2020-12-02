import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
    return<div className='content'> 
    <div className = 'item itme1'>
      My posts
    </div> 
    <div>
      <textarea ></textarea>
      <button>Add post</button>
      <button>Remove</button>
    </div>
    <Post message = 'hey how are you'/>
    <Post message = 'yo folks is props time'/>
  </div>
}

export default MyPosts;