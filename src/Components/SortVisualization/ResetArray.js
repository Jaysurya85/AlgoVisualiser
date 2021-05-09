
const ResetArray = (totalHeight,noOfBars)=> {
    let randArray = []
    // console.log(this.totalHeight)
    // console.log(this.totalWidth)
    // console.log(this.noOfBars)
    for(let i=0;i<noOfBars;i++){
        randArray = randArray.concat(Math.floor(Math.random()*(totalHeight))+5);
    }
    console.log(randArray);
    return randArray;
}

export default ResetArray;