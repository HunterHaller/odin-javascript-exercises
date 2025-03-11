const convertToCelsius = function(inputTemp) {
  let newCelsius = (inputTemp - 32) * (5 / 9)
  return Math.round(newCelsius * 10) / 10
};

const convertToFahrenheit = function(inputTemp) {
  let newFahr = inputTemp * (9 / 5) + 32
  return Math.round(newFahr * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
