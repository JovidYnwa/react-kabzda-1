import React  from 'react';
import MyPosts from './MyPosts/MyPosts'

const Profile = () =>{
    return<div className='content'> 
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtCFWKGcVcuyZNcNGYbxajolvwxiFAbYVRg&usqp=CAU"/>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;