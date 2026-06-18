// Day 6 — ES6+ Features

// Problem 26: Destructure and Rename  [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
const user = { firstName: "Sara", lastName: "Khan", age: 25 };

const { firstName, lastName, age } = user;
console.log(firstName, lastName, age);

// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
const mergeArrays = (...arrays) => {
  const flat = arrays.flat(Infinity);
  return flat;
};
console.log(mergeArrays([1, 2], [3, 4], [5]));

// Problem 28: Promise Chain  [Medium]
// Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then chain two delays: first 1 second, then 2 seconds, logging a message after each.

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
delay(1000)
  .then(() => {
    console.log("1 sec");
    return delay(2000);
  })
  .then(() => console.log("3 sec total"));

// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
const delay2 = (ms) => {
  return new Promise((resolve) => {
    setTimeout((callback, delay) => {
      return { id: id, name: "Test User" };
    });
  });
};
const getUserData = async (id) => {
  const data = await delay2(1000);
  console.log(data);
};

getUserData();

// Problem 30: Optional Chaining & Nullish Coalescing  [Easy]
// Description: Given a nested object that may have missing properties, safely access a deeply nested value using optional chaining (?.) and provide a default using nullish coalescing (??).
const obj = {
  a: {
    b: {
      c: null,
    },
  },
};

console.log(obj?.a?.b?.c ?? "default value");
