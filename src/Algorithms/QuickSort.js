const QuickSort = (array) => {
    let animations  = [];
    sortHelper(array, 0, array.length - 1, animations);
    // javascript  sort 
    //const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    // to check the sort
   // console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, array));
    return [animations, array] ;
}

//QuickSort([7,2,1,6]);

function sortHelper(array, startIndex, endIndex, animations) {
    let pivotIndex;
    if (startIndex < endIndex) {
        pivotIndex = partitionArray(array, startIndex, endIndex, animations);
        sortHelper(array, startIndex, pivotIndex - 1, animations);
        sortHelper(array, pivotIndex + 1, endIndex, animations);
    }
}

function partitionArray(array, startIndex, endIndex, animations) {
    let pivot = array[endIndex];
    let pivotIndex = startIndex;
    for (let i = startIndex; i <= endIndex - 1; i++) {
        animations.push([i, endIndex]);
        animations.push([i, endIndex]);
        if (array[i] <= pivot) {
            //Swap these two heights
            animations.push([i, array[pivotIndex]]);
            animations.push([pivotIndex, array[i]]);
            swap(array, i , pivotIndex);
            pivotIndex++;
        }
        else {
            animations.push([-1, -1]);
            animations.push([-1, -1]);
        }
        animations.push([-1, -1]);
        animations.push([-1, -1]);
    }
    animations.push([-1, -1]);
    animations.push([-1, -1]);
    animations.push([-1, -1]);
    animations.push([-1, -1]);
    //Swap these two heights
    animations.push([pivotIndex, array[endIndex]]);
    animations.push([endIndex, array[pivotIndex]]);
    swap(array, pivotIndex, endIndex);
    return pivotIndex;
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}


// to check the sort
// function arraysAreEqual(javaScriptSortedArray, array) {
//     if (javaScriptSortedArray.length !== array.length) {
//         return false;
//     }
//     for (let i = 0; i < javaScriptSortedArray.length; i++) {
//       if (javaScriptSortedArray[i] !== array[i]) {
//         return false;
//       }
//     }
//     return true;
// }

export default QuickSort;