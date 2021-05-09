import React,{useEffect, useState} from 'react';
import './SortBuilder.css';
import ResetRandomArray from '../../Components/SortVisualization/ResetArray';
import SortController from '../../Components/SortController/SortController';
import BubbleSortAnimation from '../../Components/SortVisualization/BubleSortAnimation';
import SelectionSortAnimation from '../../Components/SortVisualization/SelectionSortAnimation';
import InsertionSortAnimation from '../../Components/SortVisualization/SelectionSortAnimation';
import MergesortAnimation from '../../Components/SortVisualization/MergeSortAnimations';
import QuickSortAnimation from '../../Components/SortVisualization/QuickSortAnimation';
import EndAnimation from   '../../Components/SortVisualization/endAnimations';


const SortBuilder=()=>{

    let [array,setArray] = useState([]);
    let [animationSpeed,setAnimationSpeed] = useState(0.25);
    let [value,setValue] = useState(75);
    let [disabledButtons,setDisableButtons]  = useState(false);
    let totalWidth = 80;
    let totalHeight = 80;
    let primarycolor = "hsl(267, 54%, 41%)";
    let secondarycolor= "hsl(100, 50%, 75%)";

    useEffect(()=>{
        // return ResetArray();
        ResetArray();
    },[value]);

    const ResetArray = ()=>{

        const RandArray = ResetRandomArray(totalHeight,value);
        setArray(RandArray);
    }
    const BubbleSort = () => {
        Promise.resolve(setDisableButtons(true)).then(()=>{
            const [sortedArray,animationsLength] = BubbleSortAnimation(array,animationSpeed,primarycolor,secondarycolor);
            EndAnimation(sortedArray,animationsLength,animationSpeed,primarycolor);
            const time = (animationsLength*animationSpeed) + (sortedArray.length*2*10);
            setTimeout(()=>{
                setDisableButtons(false);
            },time)
        })
    }
    const SelectionSort = () =>{
        Promise.resolve(setDisableButtons(true)).then(()=>{
            const [sortedArray,animationsLength] = SelectionSortAnimation(array,animationSpeed,primarycolor,secondarycolor);
            EndAnimation(sortedArray,animationsLength,animationSpeed,primarycolor);
            const time = (animationsLength*animationSpeed) + (sortedArray.length*2*10);
            setTimeout(()=>{
                setDisableButtons(false);
            },time);
        })
    }

    const InsertionSort = () =>{
        Promise.resolve(setDisableButtons(true)).then(()=>{
            const [sortedArray,animationsLength] = InsertionSortAnimation(array,animationSpeed,primarycolor,secondarycolor);
            EndAnimation(sortedArray,animationsLength,animationSpeed,primarycolor);
            const time = (animationsLength*animationSpeed) + (sortedArray.length*2*10);
            setTimeout(()=>{
                setDisableButtons(false);
            },time);
        })
    }

    const MegreSort = ()=>{
        Promise.resolve(setDisableButtons(true)).then(()=>{
            const [sortedArray,animationsLength] = MergesortAnimation(array,animationSpeed,primarycolor,secondarycolor);
            EndAnimation(sortedArray,animationsLength,animationSpeed,primarycolor);
            const time = (animationsLength*animationSpeed) + (sortedArray.length*2*10);
            setTimeout(()=>{
                setDisableButtons(false);
            },time);
        })
    }

    const QuickSort = () =>{
        Promise.resolve(setDisableButtons(true)).then(()=>{
            const [sortedArray,animationsLength] = QuickSortAnimation(array,animationSpeed,primarycolor,secondarycolor);
            EndAnimation(sortedArray,animationsLength,animationSpeed,primarycolor);
            const time = (animationsLength*animationSpeed) + (sortedArray.length*2*10);
            setTimeout(()=>{
                setDisableButtons(false);
            },time);
        })
    }

    const changedHandler = (event) =>{
        const newspeed = event.target.value;
        setAnimationSpeed(newspeed);
    }
    const sliderchangeHandler = (event) =>{
        const newvalue = event.target.value;
        setValue(newvalue);
    }
    // const array = array;
    return(
        <div className="main-container">
            <SortController 
            value={value}
            sliderchange={sliderchangeHandler}
            changed = {changedHandler}
            clicked = {ResetArray}
            initual = {animationSpeed} 
            disableButtons = {disabledButtons}           
            BubbleSortclicked = {BubbleSort}
            SelectionSortclicked = {SelectionSort}
            InsertonSortclicked = {InsertionSort}
            MergeSortclicked = {MegreSort}
            QuickSortclicked = {QuickSort}
            />
            <div className="container">
                {array.map((diffvalue,index)=>(
                <div className="bar" key={index}
                style={
                    {width:`${(totalWidth)/value}%`, height:`${diffvalue}%`,backgroundColor:primarycolor}
                }></div>
                ))}
            </div>
        </div>
        
    )
}

export default SortBuilder;