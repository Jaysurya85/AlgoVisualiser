import React from 'react';
import './PathFinderController.css';
import AnimationSpeed from './AnimationSpeed/AnimationSpeed';
const PathFinderController=(props)=>{
    return (
        <div className="controller-container">
            <button className="path-reset" disabled={props.disableButton} onClick={props.resetBoard}>Reset Board</button>
            <div className="nav-animations">
                <p className="nav-text">AnimationSpeed</p>
                <AnimationSpeed initual={props.initual} changed={props.changed} disabled={props.disableButton}/>
            </div>
            <div className="nav-algo">
                <button className="path-algo" disabled={props.disableButton} onClick={props.bfsClicked}>Breadth First Search</button>
                <button className="path-algo" disabled={props.disableButton} onClick={props.bfsClicked}>Depth First Search</button>
            </div>

        </div>  
    )
}
export default PathFinderController;