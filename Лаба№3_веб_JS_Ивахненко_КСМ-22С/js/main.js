'use strict';
function calc(first, second, operation) {
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      return first / second;
  }
}

let first ='';
let second = '';
let operation = '';

while (first == '' || second == '' || operation == '')
  {
    first = prompt('Введите первое число', first);
    second = prompt('Введите второче число', second);
    operation = prompt('Введите знак', operation);
  }

alert(calc(first, second, operation));