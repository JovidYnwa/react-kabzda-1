import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
    return<div className='content'> 
    <div className = 'item'>
      My posts
    </div> 
    <div>
      <textarea ></textarea>
      <button>Add post</button>
      <button>Remove</button>
    </div>
    <Post />
    <Post />
    <Post />
  </div>
}

export default MyPosts;