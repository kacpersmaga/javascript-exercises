const sumAll = function(startOfTheRange, endOfTheRange) {
    if(startOfTheRange<0||endOfTheRange<0||typeof startOfTheRange != 'number'||typeof endOfTheRange != 'number')
        return "ERROR"

    if(endOfTheRange<startOfTheRange)
        [startOfTheRange,endOfTheRange]=[endOfTheRange,startOfTheRange]

    let suma = 0
    for(let i=startOfTheRange;i<=endOfTheRange;i++)
        suma+=i

    return suma

};

// Do not edit below this line
module.exports = sumAll;
