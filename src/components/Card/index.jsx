import React from 'react';
import './index.css';

const Card = (props) => {

    return(
        <div onClick={props.onClick(props.idx)} role="img" aria-label="click item" className="click-item shake" style={{"backgroundImage": "url("+props.link+")"}} />
    )
}

export default Card;