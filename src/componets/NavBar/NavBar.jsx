import React  from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const Navbar = () =>{
    return<nav className = {s.nav}>
    <div className = {`${s.item} ${s.active}`}>
      <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className = {s.item}>
    <NavLink to='/dialogs' activeClassName={s.activeLink}>messages</NavLink>
    </div>
    <div className = {s.item}>
    <NavLink to='/news' activeClassName={s.activeLink}>news</NavLink>
    </div>
    <div className = {s.item}>
    <NavLink to='/settinsg' activeClassName={s.activeLink}>settings</NavLink>
    </div>
    
  </nav>
}

export default Navbar;