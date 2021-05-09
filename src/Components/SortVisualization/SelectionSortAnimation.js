import SelectionSort from '../../Algorithms/SelectionSort';

const SelectionSortAnimation = (array,animationSpeed,primarycolor,secondarycolor) => {
    const [animations,sortedArray] = SelectionSort(array);
    let i;
    for(i=0;i<animations.length;i++){
      const bars = document.getElementsByClassName('bar');
      const swap = animations[i][0];
      // 1 is color change of the ith bar
      // 2 and 3 are color change of the compare 
      // 4 is the swap taking place
      if(swap===1){
        const barOneIdx = animations[i][1];
        const barTwoIdx = animations[i][2];
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = primarycolor;
          barTwoStyle.backgroundColor = 'yellow';
        }, i*animationSpeed);
      }
      else if(swap===2 || swap===3){
        const [temp ,barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;
        const color = temp === 2 ? secondarycolor : primarycolor;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i*animationSpeed);
      }
      else{
        const barIdx = animations[i][1];
        const newHeight = animations[i][2];
            setTimeout(() => {
              const barStyle = bars[barIdx].style;
              barStyle.height = `${newHeight}%`;
            }, i*animationSpeed);
      }
    }
    return [sortedArray,i]
    }

export default SelectionSortAnimation;