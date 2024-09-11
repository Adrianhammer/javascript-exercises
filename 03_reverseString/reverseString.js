const reverseString = function (input) {
  const words = [];

  words.push(input);

  var reverseString = words[0].split("").reverse().join("");

  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
