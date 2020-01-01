import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

// Component to be rendered for invalid routes

const NotFound = () => {
    return (
        <main id='not-found'>
            <p>There's nothing here. Let's go <Link to='/'>home</Link>.</p>
            <img alt='404: Not found' src='https://images.unsplash.com/photo-1541439657027-07133d717c72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' />
        </main>
    );
};

export default NotFound;