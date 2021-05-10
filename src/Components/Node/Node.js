import React from 'react';
import './Node.css';

const Node = (props)=>{
    let color = props.path?"path":props.search?"search":props.start?"start":props.end?"end":props.visited? "set":"";
    
    return (
        <div className={color+ " box "} onMouseDown={props.boxClicked} onMouseEnter={props.boxEntered} onMouseUp={props.boxUnclicked}>

        </div>
    )
}
export default Node;
