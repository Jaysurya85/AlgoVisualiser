import React from 'react';
import './PathDescription.css';
import Node from '../Node/Node';

const PathDescription = ()=>{
    return (
        <div className="description">
            <div class="each-description">
                <Node start />
                <p className="icon-description">
                    Start Node
                </p>
            </div>
            <div className ="each-description">
                <Node end />
                <p className="icon-description"> End Node</p>
            </div>
            <div className = "each-description">
                <Node visited />
                <p className="icon-description">Visited Node</p>
            </div>
            <div className = "each-description">
                <Node weight />
                <p className="icon-description">Weighted Node</p>
            </div>
        </div>
    )
}

export default PathDescription;