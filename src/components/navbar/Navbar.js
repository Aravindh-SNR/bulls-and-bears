import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = ({username}) => {
    const [visibility, setVisibility] = useState('');

    const collapseMenu = (event) => {
        if (window.getComputedStyle(document.getElementById('collapse-btn')).display !== 'none') {
            event.target.className === 'toggle-menu' && setVisibility(visibility ? '' : 'visible');
            event.target.id === 'clear-menu' && setVisibility('');
        }
    };

    return (
        <nav role='navigation'>
            <ul id='nav-list' onClick={collapseMenu}>
                <li id='page-name'>
                    <NavLink id='clear-menu' to="/">Bulls & Bears - Word Game</NavLink>
                </li>
                <li id='collapse-btn' className='toggle-menu'>
                    ☰ Menu
                </li>
                <li className={`collapsible ${visibility}`}>
                    <NavLink className='toggle-menu' to='/signin'>{username ? username : 'Sign In'}</NavLink>
                </li>
                <li className={`collapsible ${visibility}`}>
                    <NavLink className='toggle-menu' to='/register'>{username ? 'Log Out' : 'Register'}</NavLink>
                </li>
                <li className={`collapsible ${visibility}`}>
                    <NavLink className='toggle-menu' to='/leaderboard'>Leaderboard</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;