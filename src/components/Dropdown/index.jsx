import React from 'react';
import './index.css';
import images from '../../resources/images/cardImages';

const Dropdown = (props) => {
    const topicArr = [];
    const imageTopicMapper = () => {
        
        for (let top in images) {
            topicArr.push(top)
        }

        return topicArr.map((topic) => {
            console.log(topic)
            return <div className="dropdown-item" onClick={()=>{props.setTopic(topic); props.setCorrect(false)}} href="#" key={topic}>{topic.replace(/\_/g, " ")}</div>
        })
    }

    return (
        <div className="container-fluid text-center">
            <div className="btn-group">
                <button className="btn btn-dark btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.topic}
                </button>
                <div className="dropdown-menu">
                    {imageTopicMapper(props.topic)}
                </div>
            </div>
        </div>
    )
}

export default Dropdown;