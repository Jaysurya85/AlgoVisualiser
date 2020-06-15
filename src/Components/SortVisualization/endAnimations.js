const showsorted = (sortedArray,animationsLength,animationSpeed,primarycolor)=> {
    // to show the green traverse at the end
    let j;
        for(j=0;j<sortedArray.length;j++){
          const bars = document.getElementsByClassName('bar');
          const barSytle = bars[j].style;
          setTimeout(()=>{
            barSytle.backgroundColor = 'lightgreen';
          },(animationsLength*animationSpeed)+(j*10));// wait for the previous loop to end so additional i*10
        }
        // making it aqua again
        for(let k=0;k<sortedArray.length;k++){
          const bars = document.getElementsByClassName('bar');
          const barSytle = bars[k].style;
          setTimeout(()=>{
            barSytle.backgroundColor = primarycolor;
            },(animationsLength*animationSpeed)+(j*10)+(k*10));
        } 
    }

    export default showsorted;