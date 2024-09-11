const removeFromArray = function (array, ...args) {
  var myArray = array;

  //Removes only one value
  //const indexOf = myArray.indexOf(...args);
  //myArray.splice(indexOf, 1);

  return myArray.filter((num) => !args.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
