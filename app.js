console.log("check link");

// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("1. notify User function was called!");
}
notifyUser();

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("2. Running myAwesomeFunction... doing complex tasks...");
  notifyUserCallback();
  console.log("2. Complex task complete. I have notified the user");
}

// run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);

//anonamous function onCompleteCallback is not defined until the anonamous function is defined while calling the awsome function
function myAwesomeFunction(onCompleteCallback) {
  console.log("3. Running myAwesomeFunction... doing complex tasks...");
  console.log("3. Complex task complete. I will notify the user");
  onCompleteCallback();
}

myAwesomeFunction(function () {
  console.log("3. notifyUser function was called!");
});

//arrow function anouther way of running an anonamus function - () = function() in the console log
myAwesomeFunction(() => {
  console.log("4. notifyUser function was called!");
});

//We can pass more than one function in. For example, one to run on success, and one to run on failure. And we can also pass arguments to the callback functions and use them.

function myAwesomeFunction2(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  // randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback("This is the message of success");
  } else {
    onFailureCallback("This is the message of failure");
  }
}

function onAwesomeSuccess(message) {
  console.log("It was successful: ", message);
}

function onAwesomeFailure(message) {
  console.log("It failed : ", message);
}

myAwesomeFunction2(onAwesomeSuccess, onAwesomeFailure);
myAwesomeFunction2(onAwesomeSuccess, onAwesomeFailure);
myAwesomeFunction2(onAwesomeSuccess, onAwesomeFailure);
myAwesomeFunction2(onAwesomeSuccess, onAwesomeFailure);

//calculator
console.log("Calculator");

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9

const nextResult = myCalculatorFunction(3, 10, divide);
console.log(nextResult);

const nextResult2 = myCalculatorFunction(nextResult, 100, multiply);
console.log(nextResult2 + "%");

function basketCost(a, cbf1, b, cbf2, c) {
  const ab = cbf1(a, b);
  const abc = cbf2(ab, c);
  return abc;
}
const diststanceToPlanetA = 0.1685;
const pricePerUnit = 200000;
const LEO = 500000;
const resultCost = basketCost(
  diststanceToPlanetA,
  multiply,
  pricePerUnit,
  add,
  LEO
);
console.log(resultCost);
