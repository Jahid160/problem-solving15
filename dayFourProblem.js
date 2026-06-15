// Problem 16
const countProperties = (obj) => {
  if (typeof obj === "object") {
    const length = Object.keys(obj).length;
    return length;
  }
};
console.log(countProperties({ a: 1, b: 2, c: 3 }));

// Problem 17
const mergeObjects = (obj1, obj2) => {
  const singleObj = Object.assign({}, obj1, obj2);
  const spread = { ...obj1, ...obj2 };
  return spread;
};
console.log(mergeObjects({ a: 1 }, { b: 2 }));

// Problem 18
const fizzBuzz = (n) => {
  let result = [];

  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      result.push("Fizz");
      continue;
    } else if (i % 5 === 0) {
      result.push("Buzz");
      continue;
    } else {
      result.push(i);
    }
  }
  return result;
};
console.log(fizzBuzz(15));

// Problem 19
function invertObject(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
}

console.log(invertObject({ a: 1, b: 2 }));

// Problem 20
const findDuplicateNames = (arr) => {
  const find = {};
  const result = [];
  for (let item of arr) {
    const name = item.name;
    find[name] = (find[name] || 0) + 1;
  }

  for (let key in find) {
    if (find[key] > 1) {
      result.push(key);
    }
  }
  return result;
};
const input = [{ name: "Ali" }, { name: "Sara" }, { name: "Ali" }];

console.log(findDuplicateNames(input));

const findDuplicateNames2 = (arr) => {
  const seen = new Set();
  const duplicate = new Set();
  for (let item of arr) {
    if (seen.has(item.name)) {
      duplicate.add(item.name);
    } else {
      seen.add(item.name);
    }
  }
  return [...duplicate];
};
const input2 = [{ name: "Ali" }, { name: "Sara" }, { name: "Ali" }];

console.log(findDuplicateNames2(input));
