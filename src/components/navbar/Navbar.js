import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

// Component to display navigation bar at the top of the page

const Navbar = ({user, signOut}) => {

    // Represent CSS property 'display' of navigation links
    const [visibility, setVisibility] = useState('');

    // Collapse menu on clicking any of the links in the navigation bar
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
                    <NavLink id='clear-menu' to="/">
                        Bulls & Bears - Word Game
                    </NavLink>
                </li>

                <li id='collapse-btn' className='toggle-menu'>
                    ☰ Menu
                </li>

                <li className={`collapsible ${visibility}`}>
                    <NavLink className='toggle-menu' to={user.id ? '/play' : '/register'}>
                        {user.id ? 'Play' : 'Register'}
                    </NavLink>
                </li>

                <li className={`collapsible ${visibility}`}>
                    <NavLink className='toggle-menu' to='/signin' onClick={() => {user.id && signOut()}}>
                        {user.id ? 'Log Out' : 'Sign In'}
                    </NavLink>
                </li>

                <li className={`collapsible ${visibility}`}>
                    <NavLink className='toggle-menu' to='/leaderboard'>
                        Leaderboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;