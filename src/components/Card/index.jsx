import React from 'react';
import './index.css';

const Card = (props) => {

    const click = function() {
        if (props.picked.includes(props.link)){
            props.click(true);
            props.setPicked();
        }else{
            props.click(false);
            props.pushPicked(props.link);
        }
    }

    return(
        <div onClick={click} role="img" aria-label="click item" className="click-item" style={{"backgroundImage": "url("+props.link+")"}} />
    )
}

export default Card;