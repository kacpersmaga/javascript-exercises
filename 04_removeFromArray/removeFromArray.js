const removeFromArray = function(array, numberToRemove) {
    for(let i=1;i<arguments.length;i++){

        while(array.indexOf(arguments[i])!=-1){
            index = array.indexOf(arguments[i])
            array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
