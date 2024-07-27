const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

let firstNumber;
let operator;
let secondNumber;

const operate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;

    case "-":
      subtract(firstNumber, secondNumber);
      break;

    case "*":
      multiply(firstNumber, secondNumber);
      break;

    case "/":
      divide(firstNumber, secondNumber);
      break;

    default:
      break;
  }
};
