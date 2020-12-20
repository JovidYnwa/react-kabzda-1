import React  from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
      <div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtCFWKGcVcuyZNcNGYbxajolvwxiFAbYVRg&usqp=CAU"/>
        </div>
        <div className={s.description}>
          ava + description
        </div>
     </div>
    )
}

export default ProfileInfo;