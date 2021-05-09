import React from 'react';
import './AnimationSpeed.css'

const AnimationSpeed = (props)=>{
    return(
        <select className='AnimationSpeed'
        disabled={props.disabled}
        value={props.initual} onChange={props.changed} >
            <option value="100">very slow</option>
            <option value="2">0.25</option>
            <option value="1">0.5(Prefered For MergeSort)</option>
            <option value="0.5">1</option>
            <option value="0.25">2</option>
            <option value="0.125">3(Prefered For BubleSort)</option>
            
        </select>
    )
}
export default AnimationSpeed;