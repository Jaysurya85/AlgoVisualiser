import React,{Component} from 'react';
import './SortBuilder.css'
import ResetRandomArray from '../../Components/SortVisualization/ResetArray'
import SortController from '../../Components/SortController/SortController';
import BubbleSortAnimation from '../../Components/SortVisualization/BubleSortAnimation'
import SelectionSortAnimation from '../../Components/SortVisualization/SelectionSortAnimation'
import InsertionSortAnimation from '../../Components/SortVisualization/SelectionSortAnimation'
import MergesortAnimation from '../../Components/SortVisualization/MergeSortAnimations'
import QuickSortAnimation from '../../Components/SortVisualization/QuickSortAnimation'
import EndAnimation from   '../../Components/SortVisualization/endAnimations';


class SortBuilder extends Component{

state = {
    array:[],
    animationSpeed:0.25,
    value:100,
    disabledButtons:false
}
totalWidth = window.innerWidth;
totalHeight = window.innerHeight;
// noOfBars = parseInt((this.totalWidth-600)/4);
// animationSpeed = 0.1
primarycolor = "aqua"
secondarycolor= "red"

componentDidMount(){
    this.ResetArray();
}

ResetArray = ()=>{
    const RandArray = ResetRandomArray(this.totalHeight,this.state.value)
    this.setState({array:RandArray})
}
BubbleSort = () => {
    Promise.resolve(this.setState({disabledButtons:true})).then(()=>{
        const [sortedArray,animationsLength] = BubbleSortAnimation(this.state.array,this.state.animationSpeed,this.primarycolor,this.secondarycolor);
        EndAnimation(sortedArray,animationsLength,this.state.animationSpeed,this.primarycolor)
        const time = (animationsLength*this.state.animationSpeed) + (sortedArray.length*2*10)
        setTimeout(()=>{
            this.setState({disabledButtons:false})
        },time)
    })
}
SelectionSort = () =>{
    Promise.resolve(this.setState({disabledButtons:true})).then(()=>{
        const [sortedArray,animationsLength] = SelectionSortAnimation(this.state.array,this.state.animationSpeed,this.primarycolor,this.secondarycolor);
        EndAnimation(sortedArray,animationsLength,this.state.animationSpeed,this.primarycolor)
        const time = (animationsLength*this.state.animationSpeed) + (sortedArray.length*2*10)
        setTimeout(()=>{
            this.setState({disabledButtons:false})
        },time)
    })
    
    
}

InsertionSort = () =>{
    Promise.resolve(this.setState({disabledButtons:true})).then(()=>{
        const [sortedArray,animationsLength] = InsertionSortAnimation(this.state.array,this.state.animationSpeed,this.primarycolor,this.secondarycolor);
        EndAnimation(sortedArray,animationsLength,this.state.animationSpeed,this.primarycolor)
        const time = (animationsLength*this.state.animationSpeed) + (sortedArray.length*2*10)
        setTimeout(()=>{
            this.setState({disabledButtons:false})
        },time)
    })
}

MegreSort = ()=>{
    Promise.resolve(this.setState({disabledButtons:true})).then(()=>{
        const [sortedArray,animationsLength] = MergesortAnimation(this.state.array,this.state.animationSpeed,this.primarycolor,this.secondarycolor);
        EndAnimation(sortedArray,animationsLength,this.state.animationSpeed,this.primarycolor)
        const time = (animationsLength*this.state.animationSpeed) + (sortedArray.length*2*10)
        setTimeout(()=>{
            this.setState({disabledButtons:false})
        },time)
    })
}

QuickSort = () =>{
    Promise.resolve(this.setState({disabledButtons:true})).then(()=>{
        const [sortedArray,animationsLength] = QuickSortAnimation(this.state.array,this.state.animationSpeed,this.primarycolor,this.secondarycolor);
        EndAnimation(sortedArray,animationsLength,this.state.animationSpeed,this.primarycolor)
        const time = (animationsLength*this.state.animationSpeed) + (sortedArray.length*2*10)
        setTimeout(()=>{
            this.setState({disabledButtons:false})
        },time)
    })
}

changedHandler = (event) =>{
    const newspeed = event.target.value
    this.setState({animationSpeed:newspeed})
}
sliderchangeHandler = (event) =>{
    const newvalue = event.target.value
    Promise.resolve(this.setState({value:newvalue})).then(()=>this.ResetArray())

}
render(){
    const array = this.state.array;
    return(
        <div>
            <SortController 
            min = {this.state.min}
            max={this.state.max}
            value={this.state.value}
            sliderchange={this.sliderchangeHandler}
            changed = {this.changedHandler}
            clicked = {this.ResetArray}
            initual = {this.state.animationSpeed} 
            disableButtons = {this.state.disabledButtons}           
            BubbleSortclicked = {this.BubbleSort}
            SelectionSortclicked = {this.SelectionSort}
            InsertonSortclicked = {this.InsertionSort}
            MergeSortclicked = {this.MegreSort}
            QuickSortclicked = {this.QuickSort}
            />
            <div className="container">
                {array.map((value,index)=>(
                <div className="bar" key={index}
                style={
                    {width:`${(this.totalWidth-600)/this.state.value}px`, height:`${value}px`,backgroundColor:this.primarycolor}
                }></div>
                ))}
            </div>
        </div>
        
    )
}
}

export default SortBuilder;