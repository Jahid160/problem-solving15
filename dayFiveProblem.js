// problem 21
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

// Problem 22
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

// Problem 23
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

// Problem 24
const carry = (fn) => {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
};
const add = carry((a, b) => a + b);
console.log(add(2)(3));

// Problem 25
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
