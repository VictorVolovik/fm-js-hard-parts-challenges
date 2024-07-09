// Challenge 1
function sayHowdy() {
  console.log("Howdy"); // runs second
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah"); // runs first
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

// Challenge 2
function delayedGreet() {
  setTimeout(() => console.log("welcome"), 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

// Challenge 3
function helloGoodbye() {
  console.log("hello");
  setTimeout(() => console.log("good bye"), 2000);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

// Challenge 4
function brokenRecord() {
  setInterval(() => console.log("hi again"), 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

// Challenge 5
function limitedRepeat() {
  let seconds = 0;
  const id = setInterval(function () {
    if (seconds < 5) {
      seconds++;
      console.log("hi for now");
    } else {
      clearInterval(id);
    }
  }, 1000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

// Challenge 6
function everyXsecsForYsecs(func, interval, duration) {
  let time = 0;
  const id = setInterval(function () {
    if (time < duration) {
      time += interval;
      func();
    } else {
      clearInterval(id);
    }
  }, interval);
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log("This is the end!");
// }
// everyXsecsForYsecs(theEnd, 2000, 20000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

// Challenge 7
function delayCounter(target, wait) {
  let count = 0;

  function delayed() {
    const id = setInterval(function () {
      if (count < target) {
        count++;
        console.log(count);
      } else {
        clearInterval(id);
      }
    }, wait);
  }

  return delayed;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000);
// countLogger();
// // After 1 second, log 1
// // After 2 seconds, log 2
// // After 3 seconds, log 3

// Challenge 8
function promised(val) {
  return new Promise((resolve) => setTimeout(() => resolve(val), 2000));
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised("wait for it...");
// createPromise.then((val) => console.log(val)); // will log "wait for it..." to the console after 2 seconds

// Challenge 9
class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.seconds = 0;
    this.id = null;
  }
  start() {
    this.id = setInterval(() => {
      if (this.seconds === 60) {
        this.seconds = 0;
      }
      this.seconds++;
      this.cb(this.seconds);
    }, 1000);
  }
  reset() {
    clearInterval(this.id);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => {
//   console.log(val);
// });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//   clock.reset();
//   console.log("Stopped Clock after 6 seconds.");
// }, 6000);

// Challenge 10
function debounce(callback, interval) {
  let time = 0;
  let id;

  function debouncedFunction() {
    if (time <= 0) {
      time = interval;
      clearInterval(id);
      id = setInterval(() => {
        console.log(time);
        time -= 100;
      }, 100);
      return callback();
    }
  }

  return debouncedFunction;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() {
//   return "hi";
// }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function () {
//   console.log(giveHiSometimes());
// }, 2000); // -> undefined
// setTimeout(function () {
//   console.log(giveHiSometimes());
// }, 4000); // -> 'hi'
// setTimeout(function () {
//   console.log(giveHiSometimes());
// }, 8000); // -> 'hi'
