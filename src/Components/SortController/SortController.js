import React from 'react';
import './SortController.css'
import AnimationSpeed from './AnimationSpeed/AnimationSpeed';

const SortController = (props)=>{
        return(<div className = "nav">
                    <button className = "reset" onClick = {props.clicked} disabled={props.disableButtons}>Reset Array</button>
                    <div className='nav-components'>
                    <p style={{color:"white"}}>AnimationSpeed</p>
                    <AnimationSpeed 
                    disabled = {props.disableButtons}
                    changed={props.changed} 
                    initual={props.initual} />
                    </div>
                    <div className='nav-components'>
                    <p style={{color:"white"}}>No Of Bars</p>
                    <input 
                    className= "Input"
                    id="changeSize"
                    type="range"
                    min="20"
                    max="200"
                    onChange={props.sliderchange}
                    disabled={props.disableButtons}
                    />
                    <p style={{color:"white"}}>{props.value}</p>
                    </div>
                    
                    <div >
                        <button className = "nav-item" onClick = {props.BubbleSortclicked} disabled={props.disableButtons}>Buble Sort</button>
                        <button className = "nav-item" onClick = {props.InsertonSortclicked} disabled={props.disableButtons}>Insertion Sort</button>
                        <button className = "nav-item" onClick = {props.SelectionSortclicked} disabled={props.disableButtons}>Selection Sort</button>
                        <button className = "nav-item" onClick = {props.MergeSortclicked} disabled={props.disableButtons}>Merge Sort</button>
                        <button className = "nav-item" onClick = {props.QuickSortclicked} disabled={props.disableButtons}>Quick Sort</button>
                
            </div>
        </div> 
        )
}

export default SortController;