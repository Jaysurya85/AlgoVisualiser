import React, {useState, useEffect} from 'react';
import './PathFinderBuilder.css';
import Node from "../../Components/Node/Node";
import Bfs from "../../Algorithms/Bfs";
import Dfs from "../../Algorithms/Dfs";
import PathFinderController from '../../Components/PathFinderController/PathFinderController';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dijkstras from '../../Algorithms/Dijkstras';
import PathDescription from '../../Components/PathDescription/PathDescription';

const PathFinderBuilder=()=>{
    const gridWidth = 39;
    const gridHeight = 25;
    let [grid,setGrid] = useState([]);
    let [mouseUp,setMouseUp] = useState(true);
    let [animationSpeed,setAnimationSpeed] = useState("10");
    let [disableButton,setDisableButton] = useState(false);
    let [sourceClicked, setSourceClicked] = useState(false);
    let [destinationClicked,setDestinationClicked] = useState(false);
    let[source,setSource] = useState({row:10,col:5});
    let [destination,setDestination] = useState({row:10,col:30});
    let [reset,setReset] = useState(false);
    let [weight,setWeight] = useState(false);
    useEffect(()=>{
        resetBoard();

    },[])

    useEffect(()=>{
        let array = [];
        for(let i =0;i<gridHeight;i++){
            let column = [];
            for(let j =0;j<gridWidth;j++){
                column.push({
                    row:i,
                    column:j,
                    isVisited:false,
                    isStart: i===source.row && j===source.col,
                    isEnd: i===destination.row && j===destination.col,
                    isSearched: false,
                    isPath: false,
                    isWeight:false,
                    distance: Infinity,
                    weight: 1,
                    previousNode: null,
                });
            }
            array.push(column);
        }
        setGrid(array);
        setReset(false);
    },[reset]);

    const resetBoard=()=>{
        setSource({row:10,col:10})
        setDestination({row:10,col:40});
        setReset(true);
        
    }
    const startOrEndClicked=(row,column)=>{
        if(destinationClicked){
            if(row===source.row && column===source.col){
                return;
            }
            let array = grid.slice();
            let currentNode = array[destination.row][destination.col];
            let newNode = {
                ...currentNode,
                isEnd: false,
                isVisited: false,
            }
            array[destination.row][destination.col] = newNode;
            // make the new start node
            setDestination({row:row,col:column});
            let array1 = grid.slice();
            let currentNode1 = array1[row][column];
            let newNode1 = {
                ...currentNode1,
                isEnd: true,
                isVisited: false,
            }
            array1[row][column] = newNode1;

            setGrid(array);
            setGrid(array1);
            setDestinationClicked(false);
        }
        else if(row===destination.row && column===destination.col){
            if(sourceClicked){
                return;
            }
            setDestinationClicked(true);
        }
        else if(sourceClicked){
            //first make the previous source false
            // if(row===destination.row && column===destination.col){
            //     return;
            // }
            let array = grid.slice();
            let currentNode = array[source.row][source.col];
            let newNode = {
                ...currentNode,
                isStart: false,
                isVisited: false,
            }
            array[source.row][source.col] = newNode;
            // make the new start node
            setSource({row:row,col:column});
            let array1 = grid.slice();
            let currentNode1 = array1[row][column];
            let newNode1 = {
                ...currentNode1,
                isStart: true,
                isVisited:false,
            }
            array1[row][column] = newNode1;

            setGrid(array);
            setGrid(array1);
            setSourceClicked(false);
        }
        else{
            if(row===source.row && column===source.col){
                setSourceClicked(true);
            }
        }
    }
    const boxClicked = (row,column)=>{
        if(row===destination.row && column===destination.col){
            return;
        }
        let array = grid.slice();
        let currentNode = array[row][column];
        if(weight){
            let newNode = {
                ...currentNode,
                isWeight: !currentNode.isWeight,
                isVisited:false,
            }
            array[row][column] = newNode;
            setGrid(array);
            setMouseUp(false);
        }
        else{
            let newNode = {
                ...currentNode,
                isVisited: !currentNode.isVisited,
                isWeight:false,
            }
            array[row][column] = newNode;
            setGrid(array);
            setMouseUp(false);
        }
        
       
    }

    const boxEntered = (row,column)=>{
        if(mouseUp){
            return ;
        }
        boxClicked(row,column);
        
    }

    const boxUnclicked = ()=>{
        setMouseUp(true);
    }
    async function buttonClicked(animations,path){
        // console.log(animations);
        // console.log(path);
        if(animations.length===0){
            console.log("reached to the toast");
            toast("There is no Path from Source To Destination!",{});
            resetBoard();
        }
        else{
            let sleep = (ms)=>{
                return new Promise(resolve=>{
                    setTimeout(resolve,ms);
                })
            }
            setDisableButton(true);
            for(let i =0;i<animations.length;i++){
                await sleep(animationSpeed);
                let temp = animations[i];
                    let array = grid.slice();
                    let currentNode = array[temp.row][temp.col];
                    let newNode = {
                        ...currentNode,
                        isSearched: true,
                    }
                    array[temp.row][temp.col] = newNode;
                    setGrid(array);
            }
            for(let i=0;i<path.length;i++){
                await sleep(animationSpeed);
                let temp = path[i];
                let array = grid.slice();
                let currentNode = array[temp.row][temp.col];
                let newNode = {
                    ...array,
                    isPath: true,
                }
                array[temp.row][temp.col] = newNode;
                setGrid(array);
            }
            setDisableButton(false);
        }
        
    }


    const bfsClicked=()=>{
        // console.log(source);
        // console.log(destination);
        let [animations, path] = Bfs(grid,source,destination,gridHeight,gridWidth);
        buttonClicked(animations,path);
    }

    const dfsClicked=()=>{
        let [animations,path] = Dfs(grid,source,destination,gridHeight,gridWidth);
        buttonClicked(animations,path);
    }

    const dijkstrasClicked=()=>{
        let startNode = grid[source.row][source.col];
        let finishNode = grid[destination.row][destination.col];
        let [animations,path] = Dijkstras(grid,startNode,finishNode);
        buttonClicked(animations,path);
        // console.log(animations);
        // console.log(path);
        // console.log(grid);
    }

    const AnimationSpeedChanged=(event)=>{
        let newSpeed = event.target.value;
        // console.log(newSpeed);
        setAnimationSpeed(newSpeed);
    }

    const AddWeight=()=>{
        setWeight(!weight);
    }

    return (
        <div className="path-main-container">
            <PathFinderController
                bfsClicked={bfsClicked}
                dfsClicked={dfsClicked} 
                dijkstrasClicked = {dijkstrasClicked}
                resetBoard={resetBoard}
                addWeight = {AddWeight} 
                initual={animationSpeed}
                disableButton = {disableButton}
                changed = {AnimationSpeedChanged}
            />
            <div className="bottom-container">
                <div className = "grid">
                    {grid.map((rowValue,rowIndex)=>(
                        rowValue.map((columnValue,columnIndex)=>(
                            <Node 
                            visited={columnValue.isVisited} 
                            start={columnValue.isStart}
                            end={columnValue.isEnd}
                            search={columnValue.isSearched}
                            path={columnValue.isPath}
                            weight={columnValue.isWeight}
                            startOrEndClicked ={()=>startOrEndClicked(columnValue.row,columnValue.column)}
                            boxClicked={()=>boxClicked(columnValue.row,columnValue.column)} 
                            boxEntered={()=>boxEntered(columnValue.row,columnValue.column)} 
                            boxUnclicked={boxUnclicked}/>
                        ))
                    ))}
                    
                </div>
                <PathDescription />
            </div>
            
            
        </div>
    )
}
export default PathFinderBuilder;