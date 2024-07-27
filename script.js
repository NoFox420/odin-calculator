const add = (num1, num2) => {
  console.log(num1, num2);
  return parseFloat(num1) + parseFloat(num2);
};

const subtract = (num1, num2) => {
  return parseFloat(num1) - parseFloat(num2);
};

const multiply = (num1, num2) => {
  return parseFloat(num1) * parseFloat(num2);
};

const divide = (num1, num2) => {
  return parseFloat(num1) / parseFloat(num2);
};

let firstNumber = "";
let mathOperator = "";
let secondNumber = "";
let displayValue = "";

const operate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case "+":
      input.value = add(firstNumber, secondNumber);
      break;

    case "-":
      subtract(firstNumber, secondNumber);
      input.value = subtract(firstNumber, secondNumber);

      break;

    case "x":
      multiply(firstNumber, secondNumber);
      input.value = multiply(firstNumber, secondNumber);

      break;

    case "/":
      divide(firstNumber, secondNumber);
      input.value = divide(firstNumber, secondNumber);

      break;

    default:
      console.log("WRONG OPERATION!");
      break;
  }
};

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById("equals");
const dec = document.getElementById("decimal");
const input = document.getElementById("display");

digits.forEach((button) => {
  button.addEventListener("click", () => {
    if (!firstNumber) {
      firstNumber += button.value;
    } else {
      secondNumber += button.value;
    }
    input.value += button.value;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    firstNumber = input.value;
    input.value = "";
    mathOperator = operator.value;
  });
});

equal.addEventListener("click", () => {
  secondNumber = input.value;
  if (secondNumber === "0") {
    alert("Operation by Zero not possible");
  } else {
    operate(firstNumber, mathOperator, secondNumber);
  }
});
