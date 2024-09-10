const repeatString = function (string, num) {
  var word = "";

  for (let count = 0; count < num; count++) {
    word += string;
  }

  return word;
};

// Do not edit below this line
module.exports = repeatString;
