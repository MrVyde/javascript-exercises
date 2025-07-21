const Fibonacci = function(n) {
   if (n <= 0) return "ERROR"; // handles invalid input
  if (n === 1 || n === 2) return 1;

  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
 
};

const FIbonacci = function(n) {
  if (n < 0) return "ERROR";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

const FIBonacci = function(n) {
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

const fibonacci = function(n) {
  n = Number(n); // Convert string to number

  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};



// Do not edit below this line
module.exports = fibonacci;
