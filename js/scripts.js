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
// user interface logic
function saySomething(whatToSay) {
  window.alert(whatToSay);
}
const number1 = parseInt(prompt("Enter a number to add"));
const number2 = parseInt(prompt("Enter another number add"));
window.alert(saySomething("The sum is " + add(number1, number2) + "!"));
const number3 = parseInt(prompt("Enter a number to subtract"));
const number4 = parseInt(prompt("Enter another number to subtract"))

window.alert(subtract(number3, number4));
