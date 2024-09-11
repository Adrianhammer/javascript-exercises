const sumAll = function (min, max) {
  var finalSum = 0;

  if (min < 0 || max < 0) {
    return "ERROR";
  }
  if (min > max) {
    //Swap values
    [min, max] = [max, min];
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }

  for (let index = min; index < max + 1; index++) {
    finalSum += index;
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
