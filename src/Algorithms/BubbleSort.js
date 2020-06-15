const BubbleSort = (array) => {
    let animations = [];
    if (array.length <= 1) return array;
    Sorthelper(array, animations);
    return [animations,array];
}

function Sorthelper(unsorted,animations){
    let N = unsorted.length;
    for(let i=0;i<N-1;i++){
        for(let j=0;j<N-1-i;j++){
            // to show color change to show we are comparing
            animations.push([j,j+1]);
            // once shown we have to revert back so push again
            animations.push([j,j+1]);
            if(unsorted[j]>unsorted[j+1]){
                animations.push([j,unsorted[j+1]]);
                animations.push([j+1,unsorted[j]]);
                swap(unsorted,j,j+1);
            }
            else{
                animations.push([-1,-1]);
                animations.push([-1,-1]);
            }
        }
    }
}
// swapping the 2 elements

function swap(auxillaryArray, a, b) {
    let temp = auxillaryArray[a];
    auxillaryArray[a] = auxillaryArray[b];
    auxillaryArray[b] = temp;
}

export default BubbleSort;