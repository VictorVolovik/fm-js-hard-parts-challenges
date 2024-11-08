// Challenge 1
function createFunction() {
  return function () {
    console.log("hello");
  };
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// Challenge 2
function createFunctionPrinter(input) {
  function printer() {
    console.log(input);
  }
  return printer;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter("sample");
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter("hello");
// printHello(); // => should console.log('hello');

// Challenge 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();
// jasCounter();
// willCounter();

function addByX(x) {
  function add(input) {
    // console.log(input + x);
    return input + x;
  }
  return add;
}

// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5
// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5
// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// Challenge 4
function once(func) {
  let result;
  function callOnce(input) {
    if (!result) {
      result = func(input);
    }
    return result;
  }
  return callOnce;
}

// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

// Challenge 5
function after(count, func) {
  let runCount = 0;
  function callAfter() {
    runCount++;
    if (runCount >= count) {
      func();
    }
  }
  return callAfter;
}

// /*** Uncomment these to check your work! ***/
// const called = function () {
//   console.log("hello");
// };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// Challenge 6
function delay(func, wait, ...params) {
  setTimeout(func, wait, ...params);
}

// /*** Uncomment these to check your work! ***/
// const shouldDelay = (...messages) => console.log("delayed", ...messages);
// delay(shouldDelay, 3000, "some more information", "and text");

// Challenge 7
function rollCall(names) {
  let index = 0;
  function caller() {
    if (index < names.length) {
      const nameAtCurrIndex = names[index];
      index++;
      console.log(nameAtCurrIndex);
    } else {
      console.log("Everyone accounted for");
    }
  }
  return caller;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// rollCaller(); // => should log 'Victoria'
// rollCaller(); // => should log 'Juan'
// rollCaller(); // => should log 'Ruth'
// rollCaller(); // => should log 'Everyone accounted for'

// Challenge 8
function saveOutput(func, magicWord) {
  const history = {};
  function save(input) {
    if (input === magicWord) {
      return history;
    } else {
      const result = func(input);
      history[input] = result;
      return result;
    }
  }
  return save;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function (num) {
//   return num * 2;
// };
// const multBy2AndLog = saveOutput(multiplyBy2, "boo");
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

// Challenge 9
function cycleIterator(array) {
  let index = 0;

  function iterate() {
    let output = array[index % array.length];
    index++;
    return output;
  }
  return iterate;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ["Fri", "Sat", "Sun"];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// Challenge 10
function defineFirstArg(func, arg) {
  function withFirstArg(...args) {
    return func(arg, ...args);
  }
  return withFirstArg;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function (big, small) {
//   return big - small;
// };
// const sumAll = function (...nums) {
//   return nums.reduce((accum, curr) => {
//     return (accum += curr);
//   }, 0);
// };
// const subFrom20 = defineFirstArg(subtract, 20);
// const sumAllStartingFrom10 = defineFirstArg(sumAll, 10);
// console.log(subFrom20(5)); // => should log 15
// console.log(sumAllStartingFrom10(10, 15, 20)); // => should log 55

// Challenge 11
function dateStamp(func) {
  function withTimestamp(...params) {
    return {
      date: new Date().toDateString(),
      output: func(...params),
    };
  }
  return withTimestamp;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// Challenge 12
function censor() {
  let censoredList = [];

  function updateCensoredList(str1, str2) {
    censoredList.push({ search: str1, replace: str2 });
  }

  function applyCensorship(str) {
    let result = str;
    for (let censored of censoredList) {
      result = result.replace(censored.search, censored.replace);
    }
    return result;
  }

  function censurer(str1, str2) {
    if (str2) {
      updateCensoredList(str1, str2);
    }
    return applyCensorship(str1);
  }

  return censurer;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene("dogs", "cats");
// changeScene("quick", "slow");
// console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

// Challenge 13
function createSecretHolder(secret) {
  let vault = secret;

  return {
    getSecret: () => vault,
    setSecret: (value) => (vault = value),
  };
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5);
// console.log(obj.getSecret()); // => returns 5
// obj.setSecret(2);
// console.log(obj.getSecret()); // => returns 2

// Challenge 14
function callTimes() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2

// Challenge 15
function roulette(num) {
  let limit = num;
  function spin() {
    if (limit > 1) {
      limit--;
      return "spin";
    } else if (limit === 1) {
      limit--;
      return "win";
    } else {
      return "pick a number to play again";
    }
  }
  return spin;
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// Challenge 16
function average() {
  let numbers = [];
  let averageNum = 0;

  function calculate(num) {
    if (num) {
      numbers.push(num);
      const sum = numbers.reduce((accum, curr) => accum + curr, 0);
      averageNum = sum / numbers.length;
    }

    return averageNum;
  }
  return calculate;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// Challenge 17
function makeFuncTester(arrOfTests) {
  function test(func) {
    return arrOfTests.every((pair) => func(pair[0]) === pair[1]);
  }
  return test;
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(["hello", "hellO"]);
// capLastTestCases.push(["goodbye", "goodbyE"]);
// capLastTestCases.push(["howdy", "howdY"]);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = (str) => str.toUpperCase();
// const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// Challenge 18
function makeHistory(limit) {
  let history = [];

  function manageHistory(command) {
    if (command === "undo") {
      const undone = history.pop();

      if (undone) {
        return `${undone} undone`;
      } else {
        return "nothing to undo";
      }
    }
    history.push(command);
    if (history.length > limit) {
      history.shift();
    }
    return `${command} done`;
  }

  return manageHistory;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions("jump")); // => should log 'jump done'
// console.log(myActions("undo")); // => should log 'jump undone'
// console.log(myActions("walk")); // => should log 'walk done'
// console.log(myActions("code")); // => should log 'code done'
// console.log(myActions("pose")); // => should log 'pose done'
// console.log(myActions("undo")); // => should log 'pose undone'
// console.log(myActions("undo")); // => should log 'code undone'
// console.log(myActions("undo")); // => should log 'nothing to undo'

// Challenge 19
function blackjack(array) {
  function dealer(num1, num2) {
    let round = 0;
    let score = 0;

    function player() {
      if (score === null) {
        return "you are done!";
      }

      round++;

      if (round === 1) {
        score = num1 + num2;
      } else {
        score += array.shift();
      }

      if (score > 21) {
        score = null;
        return "bust";
      }

      return score;
    }

    return player;
  }

  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
