import React from 'react';
import './index.css';

const Header = (props) => {
    return (
        <nav className="header">
                <h1 className="display-4">Memory Game</h1>
                <h2 className="lead">Click on all of the pictures without clicking on the same one twice.</h2>
        </nav>
    )
}

export default Header;