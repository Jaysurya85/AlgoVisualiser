import InsertionSort from '../../Algorithms/InsertionSort'
const InsertionSortAnimation = (array,animationSpeed,primarycolor,secondarycolor) => {
    const [animations,sortedArray] = InsertionSort(array);
    let i;
    for(i=0;i<animations.length;i++){
      const bars = document.getElementsByClassName('bar');
      const isCamparing = (i % 5 === 1 || i%5 ===2);
      if(i%5===0){
        const [barOneIdx,barTwoIdx] = animations[i];
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = primarycolor;
          barTwoStyle.backgroundColor = 'yellow';
        },i*animationSpeed); 
      }
      else if (isCamparing) {
        const [barOneIdx,barTwoIdx] = animations[i];
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;
        const color = i % 5 === 1 ? secondarycolor : primarycolor;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        },i*animationSpeed); // everyloop while wait for additinal 10 sec than the previous loop
      } 
      else {
        const [barOneIdx, newHeight] = animations[i];
        // else triggered
        // -1 means no swap took place so skip
        if(barOneIdx===-1){
          continue;
        }
        else{
          setTimeout(() => {
            const barOneStyle = bars[barOneIdx].style;
            barOneStyle.height = `${newHeight}%`;
          },i*animationSpeed);
        }
      }
  }
  // to show the green traverse at the end
  return [sortedArray,i]
  }

export default InsertionSortAnimation;