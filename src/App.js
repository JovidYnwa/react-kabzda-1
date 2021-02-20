import React from 'react';  
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs  from './componets/Dialogs/Dialogs';
import Header   from './componets/Header/Header';
import Navbar   from './componets/NavBar/NavBar';
import News     from './componets/News/News';
import Profile  from './componets/Profile/Profile';
import Settings from './componets/Settings/Settings';

//All of our datas instead of redux



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'  render={() =><Dialogs dialogsData1 = {props.state.dialogsData} messagesData1 = {props.state.messagesData}/>}/>
          <Route path='/profile'  render={() =><Profile postData1 = {props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
          <Route path='/news'     component={News}/>
          <Route path='/settings' component={Settings}/>  
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
