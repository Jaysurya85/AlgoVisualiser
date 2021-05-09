import QuickSort from '../../Algorithms/QuickSort';

const QuickSortAnimation = (array,animationSpeed,primarycolor,secondarycolor) => {
    const [animations,sortedArray] = QuickSort(array);
    let i;
    // set of 8 4 compares 2 swaps
    for ( i = 0; i < animations.length - 1; i++) {
      const isColorChange = (i % 6 === 0) || (i % 6 === 1);
      const Bars = document.getElementsByClassName('bar');
      if(isColorChange === true) {
          const color = (i % 6 === 0) ? secondarycolor : primarycolor;
          const [barOneIndex, barTwoIndex] = animations[i];
          if(barOneIndex === -1) {
              continue;
          }
          const barOneStyle = Bars[barOneIndex].style;
          const barTwoStyle = Bars[barTwoIndex].style;
          setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
          },i * animationSpeed);
      }
      else {
          const [barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
              continue;
          }
          const barStyle = Bars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}%`;
          },i * animationSpeed);  
      }
  }
  return [sortedArray,i]
  }

export default QuickSortAnimation