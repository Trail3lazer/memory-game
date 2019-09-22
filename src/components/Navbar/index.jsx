import React from 'react';
import './index.css';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <ul className="container-fluid justfiy-content-between">
                <li className="brand"><a href="/">Clicky Game</a></li>
                <li className={`${props.correct}`}>
                    {props.correct !== null ?
                        (props.correct === true ?
                            "Noice"
                            :
                            "Wrong choice muchacho")
                        : 'Make a guess'}
                </li>
                <li>
                    Score: {props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;