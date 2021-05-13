import React from 'react';
import './Node.css';

const Node = (props)=>{
    let color = props.path?"path":props.search?"search":props.start?"start":props.end?"end":props.visited? "set":props.weight?"weight":"";
    let innerText = "";
    if(props.start){
        innerText="S";
    }
    if(props.end){
        innerText ="E";
    }
    if(props.weight){
        innerText = <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1em" 
                        height="1em" 
                        viewBox="0 0 32 32"><path d="M16 5c-1.645 0-3 1.355-3 3c0 .352.074.684.188 1h-5l-.157.813l-3 15l-.031.093V27h22v-2.094l-.031-.093l-3-15L23.812 9h-5A2.95 2.95 0 0 0 19 8c0-1.645-1.355-3-3-3zm0 2c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1zm-6.188 4h12.376L25 25H7z"
                        fill="black"/>
                    </svg>;
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
