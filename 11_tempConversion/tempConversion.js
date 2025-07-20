const converttoCelsius = function toCelsius(f) {
  return (5/9) * (f-32);
};

const convertToCelsius = function(fahrenheit) {
  const raw = (fahrenheit - 32) * 5 / 9;
  return Math.round(raw * 10) / 10;
};


const converttoFahrenheit = function(celsius) {
  return celsius * (9 / 5) + 32;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
