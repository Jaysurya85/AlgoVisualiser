import React from 'react';
import './Node.css';

const Node = (props)=>{
    let color = props.path?"path":props.search?"search":props.start?"start":props.end?"end":props.visited? "set":"";
    let innerText = "";
    if(props.start){
        innerText="S";
    }
    if(props.end){
        innerText ="E";
    }
    return (
        <div 
            className={color+ " box "} 
            onClick={props.startOrEndClicked}
            onMouseDown={props.boxClicked} 
            onMouseEnter={props.boxEntered} 
            onMouseUp={props.boxUnclicked}>
                {innerText}
        </div>
    )
}
export default Node;
