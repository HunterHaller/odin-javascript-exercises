const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	
  const sumNumbers = numArray.reduce((sum, currentNumber) => {
    return sum + currentNumber;
  }, 0);

  return sumNumbers;
};

const multiply = function(numArray) {
  return numArray.reduce((total, currentNumber) => {
    return total * currentNumber;
  }, 1);
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {
	let result = a;
  
  if (result == 0){
    return 1;
  }

  a--;  

  while (a > 0){
    result = result * a;
    a--;
  }

  return result;
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
