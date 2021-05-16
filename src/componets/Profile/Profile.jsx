import React  from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';



const Profile = (props) =>{


    return<div className='content' newMessageBody = {props.postData1}> 
    <ProfileInfo/>
    <MyPosts postData    = {props.postData1.profilePage.posts} 
             newPostText = {props.postData1.profilePage.newPostText}
             dispatch    = {props.dispatch} />
  </div>
}

export default Profile;