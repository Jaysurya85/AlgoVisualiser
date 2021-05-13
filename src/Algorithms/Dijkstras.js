const Dijkstras=(grid,startNode,finishNode)=>{
    // console.log("entered here");
    let visited = [];
    let [ans,animations] = HelperFunction(grid,startNode,finishNode,visited);
    if(!ans)return [[],[]];
    else{
        // console.log(animations);
        let path=[];
        let current = finishNode;
        while(current!=null){
            path.push({row:current.row,col:current.column});
            current = current.previousNode;

        }
        return [animations,path];
    }
}

const HelperFunction = (grid,startNode,finishNode,visited)=>{
    let animations = [];
    startNode.distance = 0;
    let unvisitedNodes = getAllNodes(grid,visited);
    visited[startNode.row][startNode.column] = false;
    while (unvisitedNodes.length>0) {
        sortNodesByDistance(unvisitedNodes);
        let closestNode = unvisitedNodes.splice(0,1)[0];
        // If we encounter a wall, we skip it.
        if (visited[closestNode.row][closestNode.column]) continue;
        // If the closest node is at a distance of infinity,
        // we must be trapped and should therefore stop.
        if (closestNode.distance === Infinity) return [false,[]];
        visited[closestNode.row][closestNode.column] = true;
        animations.push({row:closestNode.row,col:closestNode.column});
        if (closestNode === finishNode) return [true,animations];
        updateUnvisitedNeighbors(closestNode, grid,visited);
    }
}

const sortNodesByDistance = (unvisitedNodes)=>{
    unvisitedNodes.sort((nodeA,nodeB)=>nodeA.distance-nodeB.distance);
}

const updateUnvisitedNeighbors=(node,grid,visited)=>{
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid,visited);
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = Math.min(neighbor.distance,node.distance + neighbor.weight) ;
        neighbor.previousNode = node;
    }
}

const getUnvisitedNeighbors=(node, grid,visited)=>{
    const neighbors = [];
    const row = node.row;
    const col = node.column;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    // console.log(neighbors);
    return neighbors.filter(neighbor => !visited[neighbor.row][neighbor.column]);
  }

const getAllNodes=(grid,visited)=>{
const nodes = [];
for (let row of grid) {
    let column = [];
    for (let node of row) {
        node.weight = node.isWeight?10:1;
        nodes.push(node);
        column.push(node.isVisited);
    }
    visited.push(column);
}
return nodes;
}



export default Dijkstras;