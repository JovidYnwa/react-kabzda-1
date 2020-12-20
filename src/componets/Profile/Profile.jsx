import React  from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = () =>{
    return<div className='content'> 
    <ProfileInfo />
    <MyPosts />
  </div>
}

export default Profile;