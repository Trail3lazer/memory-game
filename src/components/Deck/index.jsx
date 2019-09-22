import React from 'react';
import './index.css';

const Deck = (props) => {
    return(
        <main className="container">
            {props.cards}
        </main>
    )
}

export default Deck;