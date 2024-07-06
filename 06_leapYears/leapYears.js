const leapYears = function(year) {

    // Divisible by 4
    if(year%4===0)
        if(year%100!=0)
            return true
        else if(year%400===0)
            return true

        return false

    // Divisible by 400


};

// Do not edit below this line
module.exports = leapYears;
