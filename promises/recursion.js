function rangeOfNumbers (start, end) {
    if (start>end){
        return []
    }else{
        
        const miniRange = rangeOfNumbers(start,end-1)
        console.log(miniRange)
        miniRange.push(end)
        
        return miniRange
    }
}

console.log (rangeOfNumbers(3,5))