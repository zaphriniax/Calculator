// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number3, number4) {
  return number3 - number4;
}

function multiply(number5, number6) {
  return number5 * number6;
}

function divide(number7, number8) {
  return number7 / number8;
}
// user interface logic
function saySomething(whatToSay) {
  window.alert(whatToSay);
}
const number1 = parseInt(prompt("Enter a number to add"));
const number2 = parseInt(prompt("Enter another number add"));
window.alert(saySomething("The sum is " + add(number1, number2) + "!"));
const number3 = parseInt(prompt("Enter a number to subtract"));
const number4 = parseInt(prompt("Enter another number to subtract"));
window.alert(saySomething("The difference is " + subtract(number3, number4) + "!"));
const number5 = parseInt(prompt("Enter a number to multiply"));
const number6 = parseInt(prompt("Enter another number to multiply"));
window.alert(saySomething("The product is " + multiply(number5, number6) + "!"));
const number7 = parseInt(prompt("Enter a number to divide"));
const number8 = parseInt(prompt("Enter another number to divide"));
window.alert(saySomething("The quotient is " + divide(number7, number8) + "!"));

