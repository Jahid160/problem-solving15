// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
const debounce = (fn, delay) => {
  let timeOutId;
  return () => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

const debounceFn = debounce(() => {
  console.log("debounce call");
}, 2000);

debounceFn();
debounceFn();
debounceFn();

// Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
const throttle = (fn, limit) => {
  let lastCall = 0;
  return (...arrays) => {
    const now = Date.now();
    if (now - lastCall < limit) {
      return;
    }
    lastCall = now;
    return fn(...arrays);
  };
};
const send = (message) => {
  console.log(`sending message ${message}`);
};
const sendMassage = throttle(send, 2000);
sendMassage("hi");
sendMassage("jahid pending");

// Problem 33: Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const cloneArr = [];
    for (let item of obj) {
      cloneArr.push(deepClone(item));
    }
    return cloneArr;
  }

  const cloneObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
}

// ✅ Example
const a = { x: { y: 1 } };
const b = deepClone(a);
b.x.y = 99;

console.log(a.x.y); // Output: 1
console.log(b.x.y); // Output: 99

// Problem 34: Event Emitter  [Medium]
// Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((l) => l !== listener);
    }
  }
}

const emitter = new EventEmitter();

function greet(name) {
  console.log("Hello " + name);
}

emitter.on("greet", greet);
emitter.emit("greet", "Sara");

emitter.off("greet", greet);
emitter.emit("greet", "John");

// Problem 35: Implement Array.prototype.map from Scratch  [Medium]
// Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

console.log(myMap([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
