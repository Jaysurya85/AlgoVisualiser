const MergeSort = (array) => {
  let animations = [];
  if (array.length <= 1) return array;
  const unsorted = array.slice();
  Sorthelper(array, 0, array.length - 1, unsorted, animations);
  return [animations,array];
}

function Sorthelper(array,left,right,unsorted,animations) {
  if (left === right) return;
  const middle = Math.floor((left + right) / 2);
  Sorthelper(unsorted, left, middle, array, animations);
  Sorthelper(unsorted, middle + 1, right, array, animations);
  Mergehelper(array, left, middle, right, unsorted, animations);
}
function Mergehelper(array,left,middle,right,unsorted,animations){
  let k = left;
  let i = left;
  let j = middle + 1;
  while (i <= middle && j <= right) {
    // to show color change to show we are comparing
    animations.push([i, j]);
    // once shown we have to revert back so push again
    animations.push([i, j]);
    if (unsorted[i] <= unsorted[j]) {
      // push the height of ith element to swap
      animations.push([k, unsorted[i]]);
      array[k++] = unsorted[i++];
    } else {
      // push the height of jth element to swap
      animations.push([k, unsorted[j]]);
      array[k++] = unsorted[j++];
    }
  }
  while (i <= middle) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, unsorted[i]]);
    array[k++] = unsorted[i++];
  }
  while (j <= right) {
    animations.push([j, j]);  
    animations.push([j, j]);
    animations.push([k, unsorted[j]]);
    array[k++] = unsorted[j++];
  }
}

export default MergeSort;