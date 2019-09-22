import React from 'react';
import './index.css';

const Card = (props) => {
    const [picked, setPicked] = useStae(false)
    const click = function() {
        if (picked){
            props.onClick(true);
        }else{
            props.onClick(false);
            setPicked(true);
        }
    }

    return(
        <div onClick={click} data-lastClicked={props.lastClicked} role="img" aria-label="click item" className="click-item shake" style={{"backgroundImage": "url("+props.link+")"}} />
    )
}

export default Card;