import React from 'react';
import './MainBuilder.css';
import SortBuilder from '../SortBuilder/SortBuilder';


const MainBuilder=()=>{
    return (
        <div className="main-container">
            <div className = "heading">   
                <p className="main-heading">Sorting Visualizer</p>
            </div>
            <SortBuilder />
        </div>
    )
}
export default MainBuilder;