const Bfs = (grid,s,d,row,col)=>{
    let pred = [];
    let dist = [];
    console.log(s);
    console.log(d);
    console.log(grid);
    let [ans,animations] = HelperFunction(grid,s,d,row,col,pred,dist);
    console.log(ans);
    console.log(pred);
    if(!ans)return [[],[]];
    let path = [];
    let temp = d;
    path.push(temp);
    while(!(temp.row===s.row) || !(temp.col===s.col)){
        let x = temp.row;
        let y = temp.col;
        temp = pred[x][y];
        path.push(temp);
    }
    path.reverse();
    // console.log(animations);
    // console.log(pred);
    return [animations,path];

}

function HelperFunction(grid,s,d,row,col,pred,dist){
    let queue = [];
    let visited = [];
    let animations = [];
    for(let i=0;i<row;i++){
        let column = [];
        let column2 = [];
        let column3 = [];
        for(let j =0;j<col;j++){
            column.push({row:-1,col:-1});
            column2.push(Infinity);
            grid[i][j].isVisited?column3.push(true):column3.push(false);
        }
        pred.push(column);
        dist.push(column2);
        visited.push(column3);
    }
    visited[s.row][s.col] = true;
    dist[s.row][s.col] = 0;
    queue.push(s);

    // bfs algo
    while(queue.length>0){
        let temp1 = queue.splice(0,1);
        let temp = temp1[0];
        let x = temp.row;
        let y = temp.col;
        // up
        if(x>0 && !visited[x-1][y]){
            visited[x-1][y] = true;
            dist[x-1][y]  = dist[x][y]+1;
            pred[x-1][y] =  temp;
            animations.push({row:x-1,col:y});
            queue.push({row:x-1,col:y});
            if(x-1===d.row && d.col===y)return [true,animations];
        }
        //left
        if(y>0 && !visited[x][y-1]){
            visited[x][y-1] = true;
            dist[x][y-1]  = dist[x][y]+1;
            pred[x][y-1] =  temp;
            animations.push({row:x,col:y-1});
            queue.push({row:x,col:y-1});
            if(x===d.row && d.col===y-1)return [true,animations];
        }
        // down
        if(x<row-1 && !visited[x+1][y]){
            visited[x+1][y] = true;
            dist[x+1][y]  = dist[x][y]+1;
            pred[x+1][y] =  temp;
            animations.push({row:x+1,col:y});
            queue.push({row:x+1,col:y});
            if(x+1===d.row && d.col===y)return [true,animations];
        }
        
        // right
        if(y<col-1 && !visited[x][y+1]){
            visited[x][y+1] = true;
            dist[x][y+1]  = dist[x][y]+1;
            pred[x][y+1] =  temp;
            animations.push({row:x,col:y+1});
            queue.push({row:x,col:y+1});
            if(x===d.row && d.col===y+1)return [true,animations];
        }
    }
    return [false,animations];
}

export default Bfs;