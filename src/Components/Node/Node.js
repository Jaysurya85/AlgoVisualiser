import React from 'react';
import './Node.css';

const Node = (props)=>{
    let color = props.path?"path":props.search?"search":props.start?"start":props.end?"end":props.visited? "set":props.weight?"weight":"";
    let innerText = "";
    if(props.start){
        innerText=<svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1em" 
                        height="1em" 
                        viewBox="0 0 16 16"><g fill="black">
                            <path 
                            d="M4.25 3l1.166-.624l8 5.333v1.248l-8 5.334l-1.166-.624V3zm1.5 1.401v7.864l5.898-3.932L5.75 4.401z"/>
                            </g>
                </svg>;
    }
    if(props.end){
        innerText =<svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1em" 
                        height="1em" 
                        viewBox="0 0 16 16">
                            <g fill="black">
                                <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0V4zM5 4.633L10.804 8L5 11.367V4.633z"/>
                                </g>
                                </svg>
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
