// * Problem 1
const swap = (x, y) => {
  let a = x;
  let b = y;
  [a, b] = [b, a];
  return a;
};
console.log(swap(3, 10));

// * Problem 2
const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(3));

// * Problem 3
const largest = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return false;
  }
  const bigNumber = Math.max(a, b, c);
  return bigNumber;
};
console.log(largest(1, 3, 4));

// * Problem 4
const toFahrenheit = (celsius) => {
  if (typeof celsius !== "number") {
    return false;
  } else {
    const converter = Number(celsius) * (9 / 5) + 32;
    return converter;
  }
};
console.log(toFahrenheit(5));

// * Problem 5
const checkSign = (n) => {
  // if (typeof n !== "number") {
  //   return false;
  // } else if (n < 0) {
  //   return "negative";
  // } else if (n > 0) {
  //   return "positive";
  // } else {
  //   return "zero";
  // }
  const result =
    typeof n !== "number"
      ? "only number allow"
      : n < 0
        ? "negative"
        : n > 0
          ? "positive"
          : "zero";
  return result;
};
console.log(checkSign(0));
