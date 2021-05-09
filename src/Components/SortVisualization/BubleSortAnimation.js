import BubbleSort from '../../Algorithms/BubbleSort';

const BubbleSortAnimation = (array,animationSpeed,primarycolor,secondarycolor) =>{
    const [animations,sortedArray] = BubbleSort(array);
    let i;
    for (i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName('bar');
      // sets of 4 first 2 shows compare the next two swaps
      const isColorChange = (i % 4 !== 2 && i%4 !==3);
      if (isColorChange) {
        const [barOneIdx,barTwoIdx] = animations[i];
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;
        const color = i % 4 === 0 ? secondarycolor : primarycolor;
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
    return [sortedArray,i];
    }

    export default BubbleSortAnimation;