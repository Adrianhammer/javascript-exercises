const leapYears = function (year) {
  //Sjekk om det kan deles på 4
  //År som kan deles på 100 er ikke leap year med mindre de kan deles på 400
  const isCentury = year % 100 == 0;
  if (year % 4 == 0 && (year % 400 == 0 || !isCentury)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
