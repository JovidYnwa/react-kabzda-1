import React  from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';



const Profile = (props) =>{


    return<div className='content'> 
    <ProfileInfo/>
    <MyPosts postData = {props.postData1.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
  </div>
}

export default Profile;
