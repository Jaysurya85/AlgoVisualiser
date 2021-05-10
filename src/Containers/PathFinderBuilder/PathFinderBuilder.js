import React, {useState, useEffect} from 'react';
import './PathFinderBuilder.css';
import Node from "../../Components/Node/Node";
import Bfs from "../../Algorithms/Bfs";

const PathFinderBuilder=()=>{
    const gridWidth = 56;
    const gridHeight = 23;
    let [grid,setGrid] = useState([]);
    let [mouseUp,setMouseUp] = useState(true);
    let sourcex = 10;
    let sourcey = 10;
    let destinationx =  10;
    let destinationy =40;
    useEffect(()=>{
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

    },[])

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
    async function buttonClicked(){
        let [animations, path] = Bfs(grid,sourcex,sourcey,destinationx,destinationy,gridHeight,gridWidth);
            for(let i =0;i<animations.length;i++){
                setTimeout(()=>{
                    let temp = animations[i];
                    // const boxs = document.getElementsByClassName('box');
                    // boxs[temp.row][temp.col].style.backgroundColor = "blue";
                    // console.log(temp);
                    let array = grid.slice();
                    let newNode = {
                        ...temp,
                        isSearched: true,
                    }
                    array[temp.row][temp.col] = newNode;
                    setGrid(array);
                },i*10);
            }
        
        const delay = animations.length*10;
        for(let i=0;i<path.length;i++){
            setTimeout(()=>{
                let temp = path[i];
                // const boxs = document.getElementsByClassName('box');
                // boxs[temp.row][temp.col].style.backgroundColor = "blue";
                // console.log(temp);
                let array = grid.slice();
                let newNode = {
                    ...temp,
                    isPath: true,
                }
                array[temp.row][temp.col] = newNode;
                setGrid(array);
            },(delay+i*25));
        }
    }

    return (
        <div className="main-container">
            <button onClick={buttonClicked}>press Me</button>
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