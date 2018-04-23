const add = (a, b) => {
  return a + b;
};

const factorial = a => {
  var res = 1;
  for (var i = 1; i <= a; i++) {
    res *= i;
  }

  return res;
};

module.exports = { add, factorial };
