// Problem 21: Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.

const factorial = (n) => {
  let result = [];
  if (typeof n === "number") {
    for (i = 1; i <= n; i++) {
      result.push(i);
      continue;
    }
  }
  const total = result.reduce((acq, curr) => {
    return acq * curr;
  }, 1);
  // let count = 1;

  // for (let i = 0; i < result.length; i++) {
  //   count = count * result[i];
  // }
  // return count;
  return total;
};
console.log(factorial(5));

// Problem 22: Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.

const fibonacci = (n) => {
  let result = [0, 1];
  if (typeof n === "number") {
    let first = 0;
    let second = 1;

    for (let i = 0; i < n - 2; i++) {
      let next = first + second;
      first = second;
      second = next;
      result.push(next);
    }
  }
  return result;
};
console.log(fibonacci(8));

// Problem 23: Create a Counter with Closure  [Medium]
// Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.

const makeCounter = () => {
  let count = 0;
  const obj = {
    increment: () => {
      return ++count;
    },
    getCount: () => {
      return count;
    },
  };
  return obj;
};

const c = makeCounter();
console.log(c.increment());
console.log(c.getCount());

// Problem 24: Curry a Function  [Medium]
// Description: Write a function curry(fn) that converts a function of two arguments into a curried version.

const carry = (fn) => {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
};
const add = carry((a, b) => a + b);
console.log(add(2)(3));

// Problem 25: Memoize a Function  [Medium]
// Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.

const memoize = (fn) => {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    }
    let result = fn(n);

    cache[n] = result;
    return result;
  };
};
const memoAdd = memoize((n) => n + 10);
console.log(memoAdd(5));
