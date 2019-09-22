import React, {useState} from 'react';
import './index.css';

const Card = (props) => {
    const [picked, setPicked] = useState(false);

    const click = function() {
        if (picked){
            props.click(true);
        }else{
            props.click(false);
            setPicked(true);
        }
    }

    return(
        <div onClick={click} role="img" aria-label="click item" className="click-item" style={{"backgroundImage": "url("+props.link+")"}} />
    )
}

export default Card;