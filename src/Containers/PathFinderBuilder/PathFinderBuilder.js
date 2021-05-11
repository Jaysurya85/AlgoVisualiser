import React, {useState, useEffect} from 'react';
import './PathFinderBuilder.css';
import Node from "../../Components/Node/Node";
import Bfs from "../../Algorithms/Bfs";
import PathFinderController from '../../Components/PathFinderController/PathFinderController';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PathFinderBuilder=()=>{
    const gridWidth = 56;
    const gridHeight = 20;
    let [grid,setGrid] = useState([]);
    let [mouseUp,setMouseUp] = useState(true);
    let [animationSpeed,setAnimationSpeed] = useState("10");
    let [disableButton,setDisableButton] = useState(false);
    let sourcex = 10;
    let sourcey = 10;
    let destinationx =  10;
    let destinationy =30;
    useEffect(()=>{
        resetBoard();

    },[])

    const resetBoard=()=>{
        let array = [];
        for(let i =0;i<gridHeight;i++){
            let column = [];
            for(let j =0;j<gridWidth;j++){
                column.push({
                    row:i,
                    column:j,
                    isVisited:false,
                    isStart: i===sourcex && j===sourcey,
                    isEnd: i===destinationx && j===destinationy,
                    isSearched: false,
                    isPath: false,
                });
            }
            array.push(column);
        }
        setGrid(array);
    }

    const boxClicked = (row,column)=>{
        let array = grid.slice();
        let currentNode = array[row][column];
        let newNode = {
            ...currentNode,
            isVisited: !currentNode.isVisited,
        }
        array[row][column] = newNode;
        setGrid(array);
        setMouseUp(false);
    }

    const boxEntered = (row,column)=>{
        if(mouseUp)return;
        else boxClicked(row,column);
    }

    const boxUnclicked = ()=>{
        setMouseUp(true);
    }
    async function buttonClicked(animations,path){
        if(animations.length==0){
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
                await(sleep(animationSpeed));
                let temp = animations[i];
                    let array = grid.slice();
                    let newNode = {
                        ...temp,
                        isSearched: true,
                    }
                    array[temp.row][temp.col] = newNode;
                    setGrid(array);
            }
            for(let i=0;i<path.length;i++){
                await(sleep(animationSpeed));
                let temp = path[i];
                let array = grid.slice();
                let newNode = {
                    ...temp,
                    isPath: true,
                }
                array[temp.row][temp.col] = newNode;
                setGrid(array);
            }
            setDisableButton(false);
        }
        
    }

    const bfsClicked=()=>{
        let [animations, path] = Bfs(grid,sourcex,sourcey,destinationx,destinationy,gridHeight,gridWidth);
        buttonClicked(animations,path);
    }

    const AnimationSpeedChanged=(event)=>{
        let newSpeed = event.target.value;
        console.log(newSpeed);
        setAnimationSpeed(newSpeed);
    }

    return (
        <div className="main-container">
            <PathFinderController
                bfsClicked={bfsClicked} 
                resetBoard={resetBoard} 
                initual={animationSpeed}
                disableButton = {disableButton}
                changed = {AnimationSpeedChanged}
                />
            <div className = "grid">
                {grid.map((rowValue,rowIndex)=>(
                    rowValue.map((columnValue,columnIndex)=>(
                        <Node 
                        visited={columnValue.isVisited} 
                        start={columnValue.isStart}
                        end={columnValue.isEnd}
                        search={columnValue.isSearched}
                        path={columnValue.isPath}
                        boxClicked={()=>boxClicked(columnValue.row,columnValue.column)} 
                        boxEntered={()=>boxEntered(columnValue.row,columnValue.column)} 
                        boxUnclicked={boxUnclicked}/>
                    ))
                ))}
                
            </div>
            
        </div>
    )
}
export default PathFinderBuilder;