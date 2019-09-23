import React from 'react';
import './index.css';

const Card = (props) => {

    const cardClick = function() {
        props.setShuffled(false)
        if (props.picked.includes( props.link )){
            props.alreadyClicked(true);
            props.setPicked([]);
        }else{
            props.alreadyClicked(false);
            props.pushPicked(props.link);
        }
    }

    return(
        <div onClick={cardClick} role="img" aria-label="click item" className="click-item" style={{"backgroundImage": "url("+props.link+")"}} />
    )
}

export default Card;