const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  if(array.length===0)
    return 0;
	return array.reduce((total, currentNumber) => total+currentNumber);
};

const multiply = function(numbers) {
 return numbers.reduce((total, currentNum) => total*currentNum, 1 )
};

const power = function(num1, power) {
  let multiplier = num1;
  if(power == 0)
    return 1;
	while(power>1){
    num1=num1*multiplier;
    power--;
  }
  return num1;
};

const factorial = function(lastNum) {
let sum = 1;
  for(let i=1;i<=lastNum;i++){
    sum = sum*i
  }
  return sum;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
