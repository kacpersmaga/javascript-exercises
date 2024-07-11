const fibonacci = function(ammount) {
 let num1 = 0;
 let num2 = 1;
  ammount = parseInt(ammount);
 if(ammount<0)
    return "OOPS"
 if(ammount===0)
    return 0;
 for(let i=0;i<ammount;i++){
    [num1, num2] = [num1 + num2, num1]
 }
 if(num1>num2)
    return num1
else return num2;
};

// Do not edit below this line
module.exports = fibonacci;
