import React  from 'react';
import s from './NavBar.module.css';

const Navbar = () =>{
    return<nav className = {s.nav}>
    <div className = {`${s.item} ${s.active}`}>
      <a>Profile</a>
    </div>
    <div className = {s.item}>
      <a>messages</a>
    </div>
    <div className = {s.item}>
      <a>news</a>          
    </div>
    <div className = {s.item}>
      <a>settings</a>          
    </div>
  </nav>
}

export default Navbar;