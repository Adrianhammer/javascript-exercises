const convertToCelsius = function (degree) {
  //Should return 0
  //1 decimal number
  //eg: 100fahreinheit == 37.8 celsius
  //Formula F = (x-32) * 5/9
  const celsius = ((degree - 32) * 5) / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (degree) {
  //Should return 32
  //1 decimal number
  //Formula C = (x * 9/5 + 32)
  const fahrenheit = (degree * 9) / 5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
