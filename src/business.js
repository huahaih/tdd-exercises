const something = (a, b) => {
  // add your logic here
  let resa = a;
  let resb = b;

  if (a % 2 == 0) {
    resa = a / 2;
  }

  if (b % 3 == 0) {
    resb = b * 2;
  }

  return resa * resb;
};

export { something };
