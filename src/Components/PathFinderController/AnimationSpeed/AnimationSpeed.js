import React from 'react';
import './AnimationSpeed.css'

const AnimationSpeed = (props)=>{
    return(
        <select className="animation-speed" 
        disabled={props.disabled}
        value={props.initual} onChange={props.changed} >
            <option value="100">very slow</option>
            <option value="10">slow</option>
            <option value="5">average</option>
            <option value="2">fast</option>
            
        </select>
    )
}
export default AnimationSpeed;