const sumAll = function(start, end) {
if (
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }

    const min = Math.min(start, end);
  const max = Math.max(start, end);

  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
