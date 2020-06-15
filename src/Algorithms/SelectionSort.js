const SelectionSort = (array) => {
    let animations  = [];
    if(array.length<=1)return array;
    sortHelper(array,animations);
    //const jsSortedArray = array.slice().sort((a, b) => a - b);
    //console.log("sort works correctly? ",AreEqual(jsSortedArray, array));
    return [animations,array];
}
//SelectionSort([7,2,1,6]);
function sortHelper(array,animations) {

    for(let i=0;i<array.length-1;i++){
        
        let min = i;
        for(let j=i+1;j<array.length;j++){
            if(i>0)animations.push([1,i-1,i]);
            animations.push([2,j,min]);
            animations.push([3,j,min]);
           if(array[j]<array[min]){
               min = j;
           }
        }
        animations.push([4,i,array[min]]);
        animations.push([4,min,array[i]]);
        swap(array,i,min)
    }

}  
function swap(array,a,b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

//to check the algorithm
// function AreEqual(jsSortedArray, array) {
//     if (jsSortedArray.length !== array.length) {
//         return false;
//     }
//     for (let i = 0; i < jsSortedArray.length; i++) {
//       if (jsSortedArray[i] !== array[i]) {
//         return false;
//       }
//     }
//     return true;
// }

export default SelectionSort;