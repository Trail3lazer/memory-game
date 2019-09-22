import React from 'react';
import './index.css';

const Card = (props) => {

    const click = function() {
        props.onClick(props.idx)
    }

    return(
        <div onClick={click} data-lastClicked={props.lastClicked} role="img" aria-label="click item" className="click-item shake" style={{"backgroundImage": "url("+props.link+")"}} />
    )
}

export default Card;