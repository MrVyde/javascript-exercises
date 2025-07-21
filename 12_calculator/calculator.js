const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

// const sum = function(a, b) {
// 	 return a + b;
// };

const sum = function(arr) {
    return arr.reduce((total, num) => total + num, 0);
  };

const multiply = function(arr) {
 return arr.reduce((product, num) => product * num, 1);
};


const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {
	if (n === 0) return 1;

  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
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
