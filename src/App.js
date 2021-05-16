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
          <Route path='/profile'  render={() =><Profile postData1 = {props.state} dispatch = {props.dispatch} />}/>
          <Route path='/dialogs'  render={() =><Dialogs store = {props.store}/>}/>
          <Route path='/news'     render={() =><News prop1={'this text comes fom prop'}/>}/>
          <Route path='/setting'  component={Settings}/>  
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
