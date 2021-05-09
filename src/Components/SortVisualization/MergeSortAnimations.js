import MergeSort from '../../Algorithms/MergeSort';

const MergeSortAnimation = (array,animationSpeed,primarycolor,secondarycolor) => {
    const [animations,sortedArray] = MergeSort(array);
      let i;
      for (i = 0; i < animations.length; i++) {
        const bars = document.getElementsByClassName('bar');
        const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = bars[barOneIdx].style;
            const barTwoStyle = bars[barTwoIdx].style;
            const color = i % 3 === 0 ? secondarycolor : primarycolor;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i*animationSpeed);
          } 
          else {
            const [barIdx, newHeight] = animations[i];
            setTimeout(() => {
              const barStyle = bars[barIdx].style;
              barStyle.height = `${newHeight}%`;
            }, i*animationSpeed);
          }
        }

    return [sortedArray,i];
    }

export default MergeSortAnimation