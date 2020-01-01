import React from 'react';
import './Loader.css';

// Component for displaying a loading animation

const Loader = () => {
    return (
        // Credit: https://loading.io/css/

        <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;