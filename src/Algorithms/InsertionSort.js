const InsertionSort = (array) => {
    let animations  = [];
    if(array.length<=1)return array;
    sortHelper(array,animations);
   // const jsSortedArray = array.slice().sort((a, b) => a - b);
   // console.log("sort works correctly? ",AreEqual(jsSortedArray, array));
    return [animations,array];
}
//InsertionSort([7,2,1,6]);
function sortHelper(array,animations) {

    for(let i=1;i<array.length;i++){
        // animations.push([i-1,i]);
        let temp = i;
        for(let j=i-1;j>=0;j--){
            // comparing
            animations.push([i-1,i]);
            animations.push([j,temp]);
            animations.push([j,temp]);
            if(array[j]>array[temp]){
                animations.push([j,array[temp]]);
                animations.push([temp,array[j]]);
                swap(array,j,temp);
                temp--;
            }
            else{
                animations.push([-1,-1]);
                animations.push([-1,-1]);
            }
        }
    }

}  
function swap(array,a,b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

// to check the algorithm
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

export default InsertionSort;